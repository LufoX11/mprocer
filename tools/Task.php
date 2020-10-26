<?php

/**
 * Base functionality for a task.
 */

require 'vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Formatter\LineFormatter;
use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Interface for tasks.
 */
interface iTask
{
    /**
     * Executes the application.
     *
     * @return void.
     */
    public function run();
}

/**
 * Base task class.
 * Your task should extend this class.
 */
class Task implements iTask
{
    /**
     * @var string PHP command.
     */
    protected static $cmd_php = '/usr/bin/php';

    /**
     * @var string RSYNC command.
     */
    protected static $cmd_rsync = '/usr/bin/rsync';

    /**
     * @var string ECHO command.
     */
    protected static $cmd_echo = '/bin/echo';

    /**
     * @var string STTY command.
     */
    protected static $cmd_stty = '/bin/stty';

    /**
     * @var string RM command.
     */
    protected static $cmd_rm = '/bin/rm';

    /**
     * @var string MV command.
     */
    protected static $cmd_mv = '/bin/mv';

    /**
     * @var string MKDIR command.
     */
    protected static $cmd_mkdir = '/bin/mkdir';

    /**
     * @var string CP command.
     */
    protected static $cmd_cp = '/bin/cp';

    /**
     * @var string CHOWN command.
     */
    protected static $cmd_chown = '/bin/chown';

    /**
     * @var string CHMOD command.
     */
    protected static $cmd_chmod = '/bin/chmod';

    /**
     * @var string TOUCH command.
     */
    protected static $cmd_touch = '/bin/touch';

    /**
     * @var string SUDO command.
     */
    protected static $cmd_sudo = '/usr/bin/sudo';

    /**
     * @var string GIT command.
     */
    protected static $cmd_git = '/usr/bin/git';

    /**
     * @var string GRUNT command.
     */
    protected static $cmd_grunt = '/usr/bin/grunt';

    /**
     * @var object Capsule database handler.
     */
    protected $_capsule;

    /**
     * @var string Command line options specifications.
     *             You MUST overwrite this in your task file to get the proper task params.
     * @see http://pear.php.net/manual/en/package.console.console-commandline.php
     */
    protected $_cmdOptionsStructure;

    /**
     * @var Console_CommandLine_Result Command line options.
     */
    protected $_cmdOptions;

    /**
     * @var Console_CommandLine Command line parser.
     */
    protected $_cmdParser;

    /**
     * @var string Base dir.
     */
    protected $_baseDir;

    /**
     * @var array Main config (loaded from config.json).
     */
    protected $_cfg;

    /**
     * @var Log Slim logger.
     */
    protected $_log;

    /**
     * @var array Output for exec() command.
     */
    protected $_output = array();

    /**
     * @var string Lock file path and name.
     */
    protected $_lockFile;

    /**
     * @var array Report of the ended tasks.
     *            You should merge this var with your own report values in your task file.
     */
    protected $_report;

    /**
     * @var boolean FALSE if we want to allow multiple processes at the same time.
     */
    protected $_lock = true;

    /**
     * @var string SUDO password.
     */
    protected $_sudoPassword;

    /**
     * @var Bitbucket\API object.
     */
    protected $_bbApi;

    /**
     * @var PhonegapBuildApi object.
     */
    protected $_pgbApi;

    /**
     * @var Foreground and baground colors for bash.
     */
    protected $_colors = array(
        'foreground' => array(
            'black' => '0;30',
            'dark_gray' => '1;30',
            'red' => '0;31',
            'bold_red' => '1;31',
            'green' => '0;32',
            'bold_green' => '1;32',
            'brown' => '0;33',
            'yellow' => '1;33',
            'blue' => '0;34',
            'bold_blue' => '1;34',
            'purple' => '0;35',
            'bold_purple' => '1;35',
            'cyan' => '0;36',
            'bold_cyan' => '1;36',
            'white' => '1;37',
            'bold_gray' => '0;37'
        ),
        'background' => array(
            'black' => '40',
            'red' => '41',
            'magenta' => '45',
            'yellow' => '43',
            'green' => '42',
            'blue' => '44',
            'cyan' => '46',
            'light_gray' => '47'
        )
    );

    /**
     * Builds a new Task object.
     *
     * @return void.
     */
    public function __construct()
    {
        $this->_baseDir = __DIR__;

        // Command line parser
        $this->_cmdParser = $parser = Console_CommandLine::fromXmlString($this->_cmdOptionsStructure);
        try {
            $cmdOptions = $parser->parse();
            if ($cmdOptions->command_name) {
                $this->_cmdOptions = $cmdOptions;
                $this->_cmdOptions->command_name = "_{$this->_cmdOptions->command_name}";
            } else {
                $parser->displayUsage();
                exit();
            }
        } catch (Exception $e) {
            $parser->displayError($e->getMessage());
        }

        // Load Config
        if (!$this->_cfg = $cfg = @json_decode(file_get_contents('config.json'), true)) {
            die($this->_fgColor('bold_red', "\nError: Could not read 'config.json'. Aborting.\n"));
        }

        // Logger
        $this->_log = new Logger('Tasks');
        $handler = new RotatingFileHandler("{$this->_baseDir}/log/report.log", 10, Logger::INFO);
        $handler->setFormatter(new LineFormatter("[%datetime%] %level_name%: %message%\n"));
        $this->_log->pushHandler($handler);

        // Database
        $capsule = new Capsule;
        foreach ($cfg['databases'] as $k => $v) {
            $capsule->addConnection(
                [
                    'driver' => 'mysql',
                    'host' => $v['host'],
                    'database' => $v['database'],
                    'username' => $v['user'],
                    'password' => $v['password'],
                    'charset' => 'utf8',
                    'collation' => 'utf8_general_ci',
                    'prefix' => ''
                ],
                $k
            );
        }
        $capsule->setAsGlobal();

        // BitBucket Credentials
        $this->_bbApi = new Bitbucket\API\Api();
        $this->_bbApi->getClient()->addListener(
            new \Bitbucket\API\Http\Listener\BasicAuthListener(
                $cfg['api']['bitbucket']['users']['admin']['user'],
                $cfg['api']['bitbucket']['users']['admin']['password']
            )
        );

        // Phonegap Build
        $this->_pgbApi = new PhonegapBuildApi($cfg['api']['pgb']['token']);

        // Stats
        $this->_report = array(
            'Date & Time' => date('Y-m-d H:i:s'),
            'Script Time' => 0,
            'Method' => ''
        );
    }

    /**
     * Executes the desired routine.
     *
     * @return void.
     */
    public function run()
    {
        try {
            echo $this->_fgColor('bold_green', "\nStarting routine.");
            if ($this->_lock) {
                $this->_lock();
            }
            $this->_time();
            if (!$this->{$this->_cmdOptions->command_name}()) {
                echo $this->_fgColor('bold_red', "\nAborted.");
            }
            $this->_report['Method'] = $this->_cmdOptions->command_name;
            $this->_report['Script Time'] = $this->_time(true);
            if ($this->_lock) {
                $this->_unlock();
            }

            // Write report
            if ($this->_output) {

                // &$output, so new values are being added by exec()
                foreach ($this->_output as $v) {
                    if ($v) {
                        if (preg_match('/(error|fatal)/i', $v)) {
                            $this->_log->addError($v);
                        } else if (preg_match('/(warning|consejo)/i', $v)) {
                            $this->_log->addWarning($v);
                        } else {
                            $this->_log->addInfo($v);
                        }
                    }
                }
                echo $this->_fgColor('purple', "\nCheck {$this->_baseDir}/log/report-" . date('Y-m-d')
                   . '.log for details.');
            }

            // Display tasks log to stdout
            $this->_showReport();

            echo $this->_fgColor('bold_green', "\n\nAll done.\n");
        } catch (Exception $e) {
            echo $this->_fgColor('bold_red', "\nUn uknown error occurred. Details:\n");
            echo "{$e}";
            echo $this->_fgColor('bold_red', "\nAborted.\n");
        }
    }

    /**
     * Saves the current report in disk.
     *
     * @return void.
     */
    protected function _showReport()
    {
        // Preformat
        $this->_report['Script Time'] = gmdate("H:i:s \H\s.", $this->_report['Script Time']);
        $reportFile = $this->_report;
        array_walk($reportFile, function(&$v, $k) { $v = ($k ? "{$k}: {$v}" : '-'); });
        $reportFile = "\n---\n" . implode("\n", $reportFile);

        // Output to terminal
        echo $this->_fgColor('green', "\n{$reportFile}");
    }

    /**
     * Locks the process to be unique (no other process will be allowed for this routine).
     *
     * @param $time integer Time for automatic unlocking the process (in secs) in case the process fails.
     * @param $lockFile string Absolute path to the task file's PID.
     * @param $importantParams array An array containing the $argv keys to use for the process filter
     *                               in phpProcessCount(...).
     * @param $signal integer One of the PCNTL signals constants: http://php.net/pcntl.constants.php
     * @return void.
     */
    protected function _lock($time = null, $lockFile = null, array $importantParams = null, $signal = SIG_BLOCK)
    {
        global $argv;

        $process = new Process(true);
        if (!$lockFile) {
            $lockFile = $this->_getLockFile();
        }
        if (!$time) {
            $time = 0;
        }

        // If no provided, it will match against all the given params (not recommended if the process might receive
        // no significative params like limits or other ones that don't change the flow of the core process).
        $cmdProc = "{$argv[0]}";
        if ($importantParams) {
            foreach ($importantParams as $v) {
                $cmdProc .= " {$argv[$v]}";
            }
        } else {
            $cmdProc .= ' ' . implode(' ', array_slice($argv, 1));
        }

        if (file_exists($lockFile)) {
            $oldPid = trim(file_get_contents($lockFile));
            clearstatcache();
            if ($time && (filemtime($lockFile) + $time) > time()) {
                if ($process->phpProcessCount($cmdProc)) {
                    die($this->_fgColor('bold_red', "\nThere is another instance running. Aborting.\n"));
                } else {
                    echo $this->_fgColor('yellow', "\nThere isn't another process running but exists an old "
                        . "lock file. Deleting it.");
                }
            } else {
                echo $this->_fgColor('yellow', "\nAutomaticaly removing lock file after $time seconds.");
                if ($oldPid && posix_kill($oldPid, $signal) && $process->phpProcessCount($cmdProc)) {
                    die($this->_fgColor('bold_red', "\nThere is another instance running. Aborting.\n"));
                } else {
                    echo $this->_fgColor('yellow', "\nDeleting stale lock file.");
                }
            }
            $this->_unlock();
        }
        file_put_contents($lockFile, getmypid());
    }

    /**
     * Unlocks a previously locked process.
     *
     * @param $lockFile string Absolute path to the task file's PID.
     * @return void.
     */
    protected function _unlock($lockFile = null)
    {
        if (!$lockFile) {
            $lockFile = $this->_getLockFile();
        }
        if (file_exists($lockFile)) {
            unlink($lockFile);
        }
    }

    /**
     * Sets and Gets execution time lapses.
     *
     * @param $reset boolean On FALSE, timer will start; On TRUE, timer will return the lapse and resets.
     * @return float Time lapse.
     */
    protected function _time($reset = false)
    {
        static $start;

        $res = 0;
        if ($reset) {
            $res = microtime(true) - $start;
        }
        $start = microtime(true);

        return $res;
    }

    /**
     * Makes string appear in color.
     *
     * @param $color string Color key in $this->_foreground.
     * @param $string string String to be parsed.
     * @return string.
     */
    protected function _fgColor($color, $string)
    {
        return "\033[" . $this->_colors['foreground'][$color] . "m" . $string . "\033[0m";
    }

    /**
     * Makes string appear with background color.
     *
     * @param $color string Color key in $this->_background.
     * @param $string string String to be parsed.
     * @return string.
     */
    protected function _bgColor($color, $string)
    {
        return "\033[" . $this->_colors['background'][$color] . 'm' . $string . "\033[0m";
    }

    /**
     * Gets the absolute path and name of the PID file.
     *
     * @param $params array Params to calculate the file ID.
     * @return string The PID file.
     */
	protected function _getLockFile(array $params = null)
    {
        global $argv;

        if (!$res = $this->_lockFile) {
            if (!$params) {
                $params = $argv;
            }
            array_shift($params);
            sort($params);
            $id = md5(implode('-', $params));
            $res = '/tmp/' . basename($_SERVER['SCRIPT_NAME'], '.php') . '-' . md5(implode('-', $params)) . '.lock';
        }

		return $res;
    }

    /**
     * Gets a password from the shell.
     *
     * @param $stars boolean Wether or not to output stars for given characters.
     * @return string.
     */
    protected function _getPassword($stars = false)
    {
        // Get current style
        $oldStyle = shell_exec(self::$cmd_stty . ' -g');

        if ($stars === false) {
            shell_exec(self::$cmd_stty . ' -echo');
            $res = rtrim(fgets(STDIN), "\n");
        } else {
            shell_exec(self::$cmd_stty . ' -icanon -echo min 1 time 0');
            $res = '';
            while (true) {
                $char = fgetc(STDIN);
                if ($char === "\n") {
                    break;
                } else if (ord($char) === 127) {
                    if (strlen($res) > 0) {
                        fwrite(STDOUT, "\x08 \x08");
                        $res = substr($res, 0, -1);
                    }
                } else {
                    fwrite(STDOUT, "*");
                    $res .= $char;
                }
            }
        }

        // Reset old style
        shell_exec(self::$cmd_stty . " {$oldStyle}");

        return $res;
    }

    /**
     * Asks for 'sudo' password.
     *
     * @param $force boolean If TRUE it will ask even if $this->_sudoPassword is already set.
     * @return string.
     */
    protected function _getSudoPassword($force = false)
    {
        $res = $this->_sudoPassword;
        if ($res === null || $force) {
            echo "\nPassword for 'sudo': ";
            $res = $this->_sudoPassword = $this->_getPassword();
        }

        return $res;
    }
}

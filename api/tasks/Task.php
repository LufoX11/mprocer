<?php

/**
 * Base functionality for a task.
 */

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
     * @var array Application config.
     */
    protected $_appCfg;

    /**
     * @var string Application root dir.
     */
    protected $_rootDir;

    /**
     * @var Log Slim logger.
     */
    protected $_log;

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
     * Builds a new Task object.
     *
     * @return void.
     */
    public function __construct()
    {
        $this->_rootDir = $rootDir = realpath(__DIR__ . '/../');
        set_include_path(get_include_path() . PATH_SEPARATOR . "{$rootDir}/vendor");

        Loader::hp(array('File', 'DateTime'));
        Loader::lib(array('Slim/Log'));
        Loader::vendor(array('Console/CommandLine', 'Slim/Extras/LogWriter/TimestampLogFileWriter'));

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

        // Application config
        $this->_appCfg = $appCfg = array(
            'main' => parse_ini_file("{$rootDir}/app/config/main.ini", true),
            'services' => parse_ini_file("{$rootDir}/app/config/services.ini", true),
            'paths' => parse_ini_file("{$rootDir}/app/config/paths.ini", true),
            'cache' => parse_ini_file("{$rootDir}/app/config/cache.ini", true),
            'push' => parse_ini_file("{$rootDir}/app/config/push.ini", true),
            'databases' => parse_ini_file("{$rootDir}/app/config/databases.ini", true)
        );

        // Logger
        $this->_log = new Slim\Log(new TimestampLogFileWriter(array('path' => "{$rootDir}/logs/tasks/")));
        $this->_log->setLevel(Slim\Log::INFO);

        // Stats
        $this->_report = array(
            'Date & Time' => date('Y-m-d H:i:s'),
            'Script Time' => 0
        );
    }

    /**
     * Executes the desired routine.
     *
     * @return void.
     */
    public function run()
    {
        if ($this->_lock) {
            $this->lock();
        }
        $this->time();
        $this->{$this->_cmdOptions->command_name}();
        $this->_report['Script Time'] = $this->time(true);
        $this->saveReport();
        if ($this->_lock) {
            $this->unlock();
        }
    }

    /**
     * Saves the current report in disk.
     *
     * @return void.
     */
    public function saveReport()
    {
        // Preformat
        $st = Hp_DateTime::secondsToTime($this->_report['Script Time']);
        $this->_report['Script Time'] = "{$st['d']} days, {$st['H']}:{$st['i']}:{$st['s']} Hs.";
        $reportFile = $this->_report;
        array_walk($reportFile, function(&$v, $k) { $v = "{$k}: {$v}"; });
        $reportFile = "\n---\n" . implode("\n", $reportFile) . "\n";

        // Output to terminal
        echo "{$reportFile}\n";

        // Output to file
        Hp_File::write(
            sprintf('%s/data/reports/tasks/%s.txt',
                $this->_rootDir,
                date('Y-m-d') . " - {$this->_cmdOptions->command_name}"),
            $reportFile);
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
    public function lock($time = null, $lockFile = null, array $importantParams = null, $signal = SIG_BLOCK)
    {
        global $argv;

        Loader::vendor(array('Process/Process'));

        $process = new Process(true);
        if (!$lockFile) {
            $lockFile = $this->getLockFile();
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
                    die("\n\n---\nThere is another process running. Exiting.\n\n");
                } else {
                    echo "\n\n---\nThere isn't another process running but exists an old lock file. Deleting it.\n\n";
                }
            } else {
                echo "\n\n---\nAutomaticaly removing lock file after $time seconds.";
                if ($oldPid && posix_kill($oldPid, $signal) && $process->phpProcessCount($cmdProc)) {
                    die("\n\n---\nThere is another process running. Impossible, exiting.\n\n");            
                } else {
                    echo "\n\n---\nDeleting stale lock file.\n\n";
                }
            }
            $this->unlock();
        }
        file_put_contents($lockFile, getmypid());
    }

    /**
     * Unlocks a previously locked process.
     *
     * @param $lockFile string Absolute path to the task file's PID.
     * @return void.
     */
    public function unlock($lockFile = null)
    {
        if (!$lockFile) {
            $lockFile = $this->getLockFile();
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
    public function time($reset = false)
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
     * Gets the absolute path and name of the PID file.
     *
     * @param $params array Params to calculate the file ID.
     * @return string The PID file.
     */
	protected function getLockFile(array $params = null)
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
}

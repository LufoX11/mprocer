<?php

/**
 * mProcer tasks.
 */

require "Task.php";

use Retrinko\Ini\IniFile;
use Retrinko\Ini\IniParser;
use Illuminate\Database\Capsule\Manager as Capsule;
use Hackzilla\PasswordGenerator\Generator\ComputerPasswordGenerator;

class Task_Main extends Task
{
    const BITBUCKET_REPO_HTTP_READONLY = 'https://%BB_USERNAME%:%BB_PASSWORD%@bitbucket.org/imaat/%REPOSITORY_NAME%.git';
    const BITBUCKET_REPO_URL = 'git@%SSH_ID%:imaat/%REPOSITORY_NAME%.git';
    const BITBUCKET_API_REPO = 'https://api.bitbucket.org/2.0/repositories/imaat/%REPOSITORY_NAME%';
    const BITBUCKET_REPO_ADMIN = 'https://bitbucket.org/imaat/%REPOSITORY_NAME%/admin';

    /**
     * {@inheritdoc}
     */
    protected $_cmdOptionsStructure =
<<<XML
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<command>
    <description>mProcer tasks utility</description>
    <version>1.00.0000</version>
    <command>
        <name>createProfile</name>
        <description>Creates a new profile directory from profiles/sample</description>
        <argument name="profileName">
            <description>The name for the new profile</description>
            <help_name>PROFILE_NAME</help_name>
        </argument>
    </command>
    <command>
        <name>pushProfile</name>
        <description>Commit and Push edited profile data</description>
        <argument name="profileName">
            <description>The name for the new profile</description>
            <help_name>PROFILE_NAME</help_name>
        </argument>
    </command>
    <command>
        <name>createRepo</name>
        <description>Creates a new repository in BitBucket for the app</description>
        <argument name="profileName">
            <description>The profile with the config for the new repository</description>
            <help_name>PROFILE_NAME</help_name>
        </argument>
    </command>
    <command>
        <name>createCloudApp</name>
        <description>Creates a new application in Phonegap Build</description>
        <argument name="profileName">
            <description>The profile with the config for the new application</description>
            <help_name>PROFILE_NAME</help_name>
        </argument>
    </command>
    <command>
        <name>downloadCloudApps</name>
        <description>Downloads the built application from Phonegap Build</description>
        <argument name="profileName">
            <description>The profile with the config for the application</description>
            <help_name>PROFILE_NAME</help_name>
        </argument>
    </command>
    <command>
        <name>fixBackendPermissions</name>
        <description>Change default root/user permissions in Apache required directories to be able to save files</description>
        <argument name="profileName">
            <description>The profile with the config for the application</description>
            <help_name>PROFILE_NAME</help_name>
        </argument>
    </command>
    <command>
        <name>replicateFrontend</name>
        <description>Replicates the frontend of a mobile application</description>
        <argument name="profileName">
            <description>Folder name inside "profiles" where is located "profile.json" and other app resources</description>
            <help_name>PROFILE_NAME</help_name>
        </argument>
    </command>
    <command>
        <name>replicateBackend</name>
        <description>Replicates the backend of a mobile application</description>
        <argument name="profileName">
            <description>Folder name inside "profiles" where is located "profile.json" and other app resources</description>
            <help_name>PROFILE_NAME</help_name>
        </argument>
    </command>
</command>
XML;

    /**
     * Creates a new profile directory from sample.
     *
     * @return self.
     */
    protected function _createProfile()
    {
        // IMPORTANT: Don't allow config->frontend->modelAppName
        if ($this->_cmdOptions->command->args['profileName'] == $this->_cfg['frontend']['modelAppName']) {
            echo $this->_fgColor('bold_red', "\nProfile '{$this->_cmdOptions->command->args['profileName']}' "
                . 'belongs to the model application and is not allowed for this method.');

            return false;
        }

        $sampleProfile = "{$this->_baseDir}/profiles/sample";
        $profilePath = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}";

        if (!$this->_replicateDir($sampleProfile, $profilePath, [ '*.swp', '*.vim' ])) {

            return false;
        }

        return $this;
    }

    /**
     * Commit and Push edited profile data.
     *
     * @return self.
     */
    protected function _pushProfile()
    {
        $profileName = $this->_cmdOptions->command->args['profileName'];
        if (!$this->_push($this->_baseDir, [ "profiles/{$profileName}" ], "Agregado el profile \"{$profileName}\"")) {

            return false;
        }

        return $this;
    }

    /**
     * Replicates the frontend of the application.
     *
     * @return self.
     */
    protected function _replicateFrontend()
    {
        // IMPORTANT: Don't allow config->frontend->modelAppName
        if ($this->_cmdOptions->command->args['profileName'] == $this->_cfg['frontend']['modelAppName']) {
            echo $this->_fgColor('bold_red', "\nProfile '{$this->_cmdOptions->command->args['profileName']}' "
                . 'belongs to the model application and is not allowed for this method.');

            return false;
        }

        $profilePath = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}";

        // Load data
        if (!$profile = $this->_loadDataFromFile("{$profilePath}/profile.json")) {

            return false;
        }
        echo "\nProfile data found:";
        echo $this->_fgColor('blue', "\n"
            . json_encode($profile, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)) . "\n";
        if (trim(strtolower(readline("Do you want to proceed? (Y/N): "))) != 'y') {

            return false;
        }

        $modelAppPath = "{$this->_cfg['paths']['frontend']}/{$this->_cfg['frontend']['modelAppName']}";
        $targetAppPath = "{$this->_cfg['paths']['frontend']}/" . $profile['application']['id'];

        // Replicate model app in filesystem
        if (!$this->_isBranch($modelAppPath, 'development')) {
            echo $this->_fgColor('bold_red', "\nGIT branch in source ({$modelAppPath}) must be 'development'. ");

            return false;
        }
        if (!$this->_replicateDir($modelAppPath, $targetAppPath, [ '.git', '*.swp', '.trash', '*.vim' ])) {

            return false;
        }

        // Replace texts and branding
        if (!$this->_doBranding($targetAppPath, $profile)) {

            return false;
        }

        // Generate icons and images
        if (!$this->_generateImages($targetAppPath, "{$profilePath}/images")) {

            return false;
        }

        // Init git repository
        if (!$this->_gitInit($targetAppPath, $profile['repository']['name'])) {

            return false;
        }

        // Build and Push
        $this->_build($targetAppPath, $profile['repository']['name']);

        return $this;
    }

    /**
     * Replicates the backend of the application.
     *
     * @return self.
     */
    protected function _replicateBackend()
    {
        // IMPORTANT: Don't allow config->frontend->modelAppName
        if ($this->_cmdOptions->command->args['profileName'] == $this->_cfg['frontend']['modelAppName']) {
            echo $this->_fgColor('bold_red', "\nProfile '{$this->_cmdOptions->command->args['profileName']}' "
                . 'belongs to the model application and is not allowed for this method.');

            return false;
        }

        $profilePath = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}";
        $apiPath = $this->_cfg['paths']['backend'];

        // Load data
        if (!$profile = $this->_loadDataFromFile("{$profilePath}/profile.json")) {

            return false;
        }
        echo "\nProfile data found:";
        echo $this->_fgColor('blue', "\n"
            . json_encode($profile, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)) . "\n";
        if (trim(strtolower(readline("Do you want to proceed? (Y/N): "))) != 'y') {

            return false;
        }

        // Check that the branch is "master"
        if (!$this->_isBranch($apiPath, 'master')) {
            echo $this->_fgColor('bold_red', "\nGIT branch in source ({$apiPath}) must be 'master'. ");

            return false;
        }

        // Create directories
        $directories = [
            'iosCertificates' => "{$apiPath}/app/certificates/push/ios/{$profile['application']['id']}",
            'images' => "{$apiPath}/public/static/img/services/{$profile['application']['id']}"
        ];
        $this->_createDir($directories);
        $this->_createGitkeepFile($directories);

        // Write in API: app/config/services.ini
        $data = [
            $profile['application']['id'] => [
                'title' => $profile['company']['shortName'],
                'sys' => [
                    'locale' => $profile['application']['locale'],
                    'timezone' => $profile['application']['timezone'],
                    'defaultWeather' => $profile['application']['defaultWeather']
                ],
                'apiSource' => $profile['partner']['api']['source'],
                $profile['partner']['api']['source'] => [
                    'key' => $profile['partner']['api']['key'],
                    'url' => $profile['partner']['api']['url']
                ]
            ]
        ];
        if (!$this->_editIniFile("{$apiPath}/app/config/services.ini", $data, 'add')) {

            return false;
        }

        // Write in API: app/config/main.ini
        if (!$data = $this->_getIniFile("{$apiPath}/app/config/main.ini")) {

            return false;
        }
        if (!in_array($profile['application']['id'], $data['services'])) {
            $data['services'][] = $profile['application']['id'];
        }
        if (!$this->_editIniFile("{$apiPath}/app/config/main.ini", $data, 'add')) {

            return false;
        }

        // Write in API: app/config/push.ini
        $data = [
            $profile['application']['id'] => [
                'google' => [
                    'api_key' => $profile['application']['api']['google']['apiKey'],
                    'project_number' => $profile['application']['api']['google']['projectNumber'],
                ],
                'ios' => [
                    'cert' => 'Certificates.pem',
                    'passphrase' => $profile['application']['certificates']['apple']['push']['passphrase'],
                ]
            ]
        ];
        if (!$this->_editIniFile("{$apiPath}/app/config/push.ini", $data, 'add')) {

            return false;
        }

        // Write in API: app/config/emails.ini
        $data = [
            $profile['application']['id'] => [
                'contact' => [
                    'fromName' => 'Contacto - App Mobile',
                    'fromEmail' => 'no-reply@imaat.com.ar',
                    'toEmail' => $profile['company']['email']['info']
                ]
            ]
        ];
        if (!$this->_editIniFile("{$apiPath}/app/config/emails.ini", $data, 'add')) {

            return false;
        }

        // Copy iOS Push Certificate
        $this->_copyFile(
            "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}/certificates/ios/Certificates.pem",
            "{$this->_cfg['paths']['backend']}/app/certificates/push/ios/{$profile['application']['id']}/");

        // Update DB
        $this->_createAdminUser(
            "{$profile['partner']['name']} - " . ucfirst($profile['application']['id']),
            $profile['company']['shortName'],
            strtolower($profile['partner']['name']) . '.' . $profile['application']['id'],
            $profile['application']['id']
        );

        // Change owner to Apache of required directories
        $directories = [
            'images' => "{$apiPath}/public/static/img/services/{$profile['application']['id']}"
        ];
        $this->_setFileOptions($directories, $this->_cfg['apache']['user']);

        // Regenerate stats
        echo $this->_fgColor('purple', "\nGenerating initial app stats... ");
        exec(self::$cmd_php . " {$apiPath}/tasks/Stats.php generate {$profile['application']['id']} 2>&1", $this->_output);
        echo $this->_fgColor('green', 'OK');

        // Push
        $files = [
            "app/certificates/push/ios/{$profile['application']['id']}",
            "public/static/img/services/{$profile['application']['id']}"
        ];
        if (!$this->_push($apiPath, $files,
            "Agregados nuevos directorios de la aplicación \"{$profile['application']['id']}\"")) {

            return false;
        }

        return $this;
    }

    /**
     * Creates a new repository in BitBucket.
     *
     * @return self.
     */
    protected function _createRepo()
    {
        // IMPORTANT: Don't allow config->frontend->modelAppName
        if ($this->_cmdOptions->command->args['profileName'] == $this->_cfg['frontend']['modelAppName']) {
            echo $this->_fgColor('bold_red', "\nProfile '{$this->_cmdOptions->command->args['profileName']}' "
                . 'belongs to the model application and is not allowed for this method.');

            return false;
        }

        $profilePath = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}";

        // Load data
        if (!$profile = $this->_loadDataFromFile("{$profilePath}/profile.json", [ 'ignore' => [ 'repository' ] ])) {

            return false;
        }
        echo "\nProfile data found:";
        echo $this->_fgColor('blue', "\n"
            . json_encode($profile, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)) . "\n";
        if (trim(strtolower(readline("Do you want to proceed? (Y/N): "))) != 'y') {

            return false;
        }

        // Check repo credentials for iMaat account
        echo $this->_fgColor('purple', "\nAuthenticating in BitBucket... ");
        if (!$this->_validateBbCredentials()) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nInvalid login credentials. Check config.json -> api->bitbucket->*");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        // Create the new repo for the iMaat team
        $params = [
            'description' => 'Aplicación mobile basada en mProcer.',
            'project' => [
                'key' => $this->_cfg['api']['bitbucket']['project']['key']
            ]
        ];
        if (!$this->_createBbRepository($profile['repository']['name'], $params)) {

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        return $this;
    }

    /**
     * Creates a new app in Phonegap Build.
     *
     * @return self.
     */
    protected function _createCloudApp()
    {
        $profilePath = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}";

        // Load data
        if (!$profile = $this->_loadDataFromFile("{$profilePath}/profile.json")) {

            return false;
        }
        echo "\nProfile data found:";
        echo $this->_fgColor('blue', "\n"
            . json_encode($profile, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)) . "\n";
        if (trim(strtolower(readline("Do you want to proceed? (Y/N): "))) != 'y') {

            return false;
        }

        // Check for local repository path
        $appPath = "{$this->_cfg['paths']['frontend']}/{$profile['application']['id']}";
        echo $this->_fgColor('purple', "\nValidating that repository '{$profile['repository']['name']}' is not empty... ");
        if (is_dir($appPath)) {

            // Check that the repo is not empty
            if ($this->_isEmptyRepo("{$this->_cfg['paths']['frontend']}/{$profile['application']['id']}")) {
                echo $this->_fgColor('red', 'X');
                echo $this->_fgColor('bold_red', "\nRepository is empty.");

                return false;
            }
            echo $this->_fgColor('green', 'OK');
        } else {
            echo $this->_fgColor('red', 'Skipped');
            echo $this->_fgColor('purple', "\n  - Local application '{$appPath}' was not created."
                . " Use 'replicateFrontend' command to create it.");
        }

        // Check PGB credentials for iMaat account
        echo $this->_fgColor('purple', "\nAuthenticating in Phonegap Build... ");
        if (!$this->_validatePgbCredentials()) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nInvalid login credentials. Check config.json -> api->pgb->token");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        // Create required keys
        if (!$this->_createPgbKeys($profile['application']['certificates']['apple']['distribution']['mobileprovision'])) {

            return false;
        }

        // Delete mProcer apps before creating the new repo
        // @link: http://community.phonegap.com/nitobi/topics/paid-plan-not-available-in-my-country?page=1#reply_16031560
        if (!$this->_deletePgbApps()) {

            return false;
        }

        // Create app
        $this->_validatePgbCredentials(true); // Force reload
        $url = str_replace(
            [ '%BB_USERNAME%', '%BB_PASSWORD%', '%REPOSITORY_NAME%' ],
            [
                $this->_cfg['api']['bitbucket']['users']['readonly']['user'],
                $this->_cfg['api']['bitbucket']['users']['readonly']['password'],
                $profile['repository']['name']
            ],
            self::BITBUCKET_REPO_HTTP_READONLY
        );
        $title = $profile['company']['shortName'];
        $data = [
            'keys' => $this->_getPgbKeys($profile['application']['certificates'])
        ];
        if (!$this->_createPgbApp($url, $title, $data)) {

            return false;
        }

        return $this;
    }

    /**
     * Download all applications from Phonegap Build
     *
     * @return self.
     */
    protected function _downloadCloudApps()
    {
        $profilePath = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}";

        // Load data
        if (!$profile = $this->_loadDataFromFile("{$profilePath}/profile.json")) {

            return false;
        }
        echo "\nProfile data found:";
        echo $this->_fgColor('blue', "\n"
            . json_encode($profile, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)) . "\n";
        if (trim(strtolower(readline("Do you want to proceed? (Y/N): "))) != 'y') {

            return false;
        }

        // Check PGB credentials for iMaat account
        echo $this->_fgColor('purple', "\nAuthenticating in Phonegap Build... ");
        if (!$this->_validatePgbCredentials()) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nInvalid login credentials. Check config.json -> api->pgb->token");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        // Download apps (all platforms)
        if (!$this->_downloadApp($profile['company']['shortName'], "{$profilePath}/downloads")) {

            return false;
        }

        return $this;
    }
    
    /**
     * Change default root/user permissions in Apache required directories to be able to save files.
     *
     * @return self.
     */
    protected function _fixBackendPermissions()
    {
        $profilePath = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}";
        $apiPath = $this->_cfg['paths']['backend'];

        // Load data
        if (!$profile = $this->_loadDataFromFile("{$profilePath}/profile.json")) {

            return false;
        }
        echo "\nProfile data found:";
        echo $this->_fgColor('blue', "\n"
            . json_encode($profile, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)) . "\n";
        if (trim(strtolower(readline("Do you want to proceed? (Y/N): "))) != 'y') {

            return false;
        }

        // Change owner to Apache of required directories
        $directories = [
            'images' => "{$apiPath}/public/static/img/services/{$profile['application']['id']}"
        ];
        $this->_setFileOptions($directories, $this->_cfg['apache']['user']);

        return $this;
    }

    /*** HELPERS **************************************************************/

    /**
     * Download apps to profiles/[appId]/downloads directory.
     *
     * @param $title string Application title in PGB (profile->company->shortName).
     * @param $directory string Target directory to save the file(s).
     * @param $platform string Platform to download [all|android|ios].
     * @return mixed.
     */
    private function _downloadApp($title, $directory, $platform = 'all')
    {
        // Get application data (we need PGB App ID)
        echo $this->_fgColor('purple', "\nRetrieving profile application... ");
        if (!$app = $this->_getPgbApp($title)) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nApplication was not yet created. Use 'createCloudApp' command.");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        // Get download links
        echo $this->_fgColor('purple', "\nRetrieving download links... ");
        $links = [];
        $platforms = ($platform == 'all' ? [ 'android', 'ios', 'winphone' ] : [ $platform ]);
        foreach ($platforms as $v) {
            if ($link = $this->_pgbApi->downloadApplicationPlatform($app['id'], $v)) {
                $links[$v] = $link['location'];
            }
        }
        echo $this->_fgColor('green', 'OK');
        if ($links) {
            echo $this->_fgColor('purple', "\n  - Built applications found: " . count($links)
                . ' (' . implode(', ', array_keys($links)) . ')');
        } else {
            echo $this->_fgColor('purple', "\n  - No built applications found. You need to wait some minutes.");
        }

        // Download apps
        foreach ($links as $k => $v) {
            $targetFile = "{$directory}/" . basename($v);
            echo $this->_fgColor('purple', "\nDownloading " . ucfirst($k) . " application to '{$targetFile}'... ");
            @file_put_contents($targetFile, fopen($v, 'rb'));
            if (file_exists($targetFile)) {
                echo $this->_fgColor('green', 'OK');
            } else {
                echo $this->_fgColor('red', 'X');
                echo $this->_fgColor('bold_red', "\nCould not save file to '{$targetFile}'.");

                return false;
            }
        }

        return $this;
    }

    /**
     * Retrieves the application for the given application ID.
     *
     * @param $title string Application title in PGB (profile->company->shortName).
     * @return mixed ARRAY with app data if success; FALSE otherwise.
     */
    private function _getPgbApp($title)
    {
        $res = false;
        $profile = $this->_validatePgbCredentials();
        foreach ($profile['apps']['all'] as $v) {
            if ($v['title'] == $title) {
                $res = $v;
                break;
            }
        }

        return $res;
    }

    /**
     * Retrieves key info for the selected OS.
     *
     * @param $certificates array Application certificates (profile->application->certificates).
     * @return array.
     */
    private function _getPgbKeys(array $certificates)
    {
        $res = [];
        $profile = $this->_validatePgbCredentials();
        foreach ($profile['keys'] as $k => $v1) { // $k = android|ios

            switch ($k) {

                // For Android, there's only a single key (named "Release") to sign all apps
                case 'android':
                    $app = current(array_filter($v1['all'], function ($v) use ($certificates) {
                        return ($v['title'] == $certificates['google']['release']['name']); }));
                    $res[$k] = [
                        'id' => $app['id'],
                        'key_pw' => $certificates['google']['release']['password'],
                        'keystore_pw' => $certificates['google']['release']['password']
                    ];
                    break;

                case 'ios':
                    $app = current(array_filter($v1['all'], function ($v) use ($certificates) {
                        return ($v['title'] == $certificates['apple']['distribution']['mobileprovision']); }));
                    $res[$k] = [
                        'id' => $app['id'],
                        'password' => $certificates['apple']['distribution']['password']
                    ];
                    break;
            }
        }

        return $res;
    }

    /**
     * Deletes all PGB apps for mProcer.
     *
     * @return boolean.
     */
    private function _deletePgbApps()
    {
        if (!$profiles = $this->_fetchAppProfiles('company.shortName')) {

            return false;
        }
        echo $this->_fgColor('purple', "\nDeleting all PGB applications for mProcer... ");
        $pgbProfile = $this->_validatePgbCredentials();
        $pattern = '/(' . implode('|', $profiles) . ')/i';
        $appsToDelete = array_map(
            function ($v) use ($pattern) { return (preg_match($pattern, $v['title']) ? $v : false); },
            $pgbProfile['apps']['all']
        );
        foreach ($appsToDelete as $v) {
            if (!$this->_pgbApi->deleteApplication($v['id'])) {
                echo $this->_fgColor('red', 'X');
                echo $this->_fgColor('bold_red', "\nCould not delete application '{$v['title']}': "
                    . "'{$this->_pgbApi->error()}'.");

                return false;
            }
        }
        echo $this->_fgColor('green', 'OK');

        return true;
    }

    /**
     * Returns all profile.json files available in /profiles directory.
     *
     * @param $field string Return only this field. Format is: "key[.subkey]"
     * @return array.
     */
    private function _fetchAppProfiles($field = null)
    {
        chdir("{$this->_baseDir}/profiles");
        $directories = preg_grep('/^[sample]*$/', glob('*', GLOB_ONLYDIR), PREG_GREP_INVERT);
        $res = [];
        foreach ($directories as $v) {
            if (!$profile = $this->_getJsonFile("{$this->_baseDir}/profiles/{$v}/profile.json")) {

                return false;
            }
            if ($field) {
                $profile = new Dflydev\DotAccessData\Data($profile);
                $res[] = $profile->get($field);
            } else {
                $res[] = $profile;
            }
        }

        return $res;
    }

    /**
     * Creates a new application in Phonegap Build.
     *
     * @param $repoUrl string Repository URL to get app code from.
     * @param $title string Application title.
     * @param $data array Optional parameters.
     *                    @link: http://docs.build.phonegap.com/en_US/developer_api_write.md.html#_post_https_build_phonegap_com_api_v1_apps
     * @return mixed.
     */
    private function _createPgbApp($repoUrl, $title, array $data = array())
    {
        // Create App
        echo $this->_fgColor('purple', "\nCreating application '{$title}' in Phonegap Build... ");
        $data = array_merge([ 'title' => $title ], $data);
        if (!$this->_pgbApi->createApplicationFromRepo($repoUrl, $data)) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nCould not create app: '{$this->_pgbApi->error()}'");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        return true;

    }

    /**
     * Creates PGB keys required to compile an app.
     *
     * @param $name string Key name (like "Secontur").
     * @return boolean.
     */
    private function _createPgbKeys($name)
    {
        // Validate that the key does not exist
        echo $this->_fgColor('purple', "\nValidating iOS key name... ");
        $profile = $this->_validatePgbCredentials();
        $iosKeyNames = array_map(function ($v) { return $v['title']; }, $profile['keys']['ios']['all']);
        if (in_array($name, $iosKeyNames)) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nA key with the name '{$name}' already exists.");

            return true;
        }
        echo $this->_fgColor('green', 'OK');

        // Create key
        echo $this->_fgColor('purple', "\nCreating iOS key '{$name}'... ");
        $p12 = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}"
            . '/certificates/ios/Certificates.p12';
        $provisioningProfile = "{$this->_baseDir}/profiles/{$this->_cmdOptions->command->args['profileName']}"
            . "/certificates/ios/{$name}.mobileprovision";
        if (!$this->_pgbApi->addKeyIos($name, $p12, $provisioningProfile)) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nCould not create key: '{$this->_pgbApi->error()}'.");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        return true;
    }

    /**
     * Creates a new repository in BitBucket.
     *
     * @param $name string Repository Name.
     * @param $params array Other repo params.
     *                      See: vendor/gentle/bitbucket-api/lib/Bitbucket/API/Repositories/Repository.php 
     * @return boolean.
     */
    private function _createBbRepository($name, array $params = array())
    {
        $repo = $this->_bbApi->api('Repositories\Repository');

        // Validate that the repo does not exist
        echo $this->_fgColor('purple', "\nValidating new repository name... ");
        if ($repo->get('imaat', $name)->getStatusCode() == 200) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nA repository with the name '{$name}' already exists.");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        // Create the repo
        echo $this->_fgColor('purple', "\nCreating repository '{$name}'... ");
        if ($repo->create('imaat', $name, $params)->getStatusCode() != 200) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nCould not create repository.");

            return false;
        }

        return true;
    }

    /**
     * Tells whether the BitBucket credentials are valid for the iMaat account.
     *
     * @return boolean.
     */
    private function _validateBbCredentials()
    {
        $repositories = $this->_bbApi->api('Repositories');
        $res = ($repositories->all('imaat')->getStatusCode() == 200);

        return $res;
    }

    /**
     * Tells whether the PGB credentials are valid for the iMaat account and returns a PGB profile.
     *
     * @param $force boolean If TRUE, it will hit the PGB API instead of returning static data.
     * @return array PGB profile.
     */
    private function _validatePgbCredentials($force = false)
    {
        static $profile;

        if ($profile && !$force) {
            $res = $profile;
        } else {
            $res = $profile = $this->_pgbApi->getProfile();
        }

        return $res;
    }

    /**
     * Creates an admin user in imaat db.
     *
     * @param $name string User fullname (like "ConsutlAr - Secontur").
     * @param $shortName string User short name (like "Secontur LCC").
     * @param $username string Login username (like "consultar.secontur").
     * @param $service string Service name (like "secontur").
     * @param $password string Plane password (will be hashed).
     * @return self.
     */
    private function _createAdminUser($name, $shortName, $username, $service, $password = null)
    {
        $tbAdminUsers = Capsule::connection('imaat')->table('admin_users');
        $tbAdminUsersGroups = Capsule::connection('imaat')->table('admin_users_groups');
        $tbServices = Capsule::table('services');
        if (!$password) {
            $passwordGenerator = new ComputerPasswordGenerator();
            $password = $passwordGenerator->setSymbols(false)->setLength(15)->generatePassword();
        }

        // DB.imaat
        if (!$row = $tbAdminUsers->where('username', $username)->where('application', 'mprocer')->first()) {
            echo $this->_fgColor('purple', "\nAdding Admin user '{$username}'... ");

            // Add user
            $adminUserId = $tbAdminUsers->insertGetId([
                'name' => $name,
                'username' => $username,
                'password' => sha1("::Holmes::{$password}"),
                'application' => 'mprocer',
                'service' => $service,
                'status' => 'enabled',
                'access_token' => ''
            ]);

            // Add main group to user
            $groups = $tbAdminUsersGroups
                ->join('admin_users', 'admin_users_groups.users_id', '=', 'admin_users.id')
                ->select('admin_users_groups.groups_id')
                ->where('username', $this->_cfg['database']['modelAdminUser'])
                ->get();
            foreach ($groups as $v) {
                $tbAdminUsersGroups->insert([
                    'users_id' => $adminUserId,
                    'groups_id' => $v->groups_id
                ]);
            }

            echo $this->_fgColor('green', 'OK');
            echo $this->_fgColor('purple', "\n - Generated password for user is: '{$password}'");
        } else {
            echo $this->_fgColor('purple', "\nAdmin user '{$username}' already exists. Skipped.");
        }

        // DB.mprocer
        if (!$row = $tbServices->where('name', $service)->first()) {
            echo $this->_fgColor('purple', "\nAdding Service '{$service}'... ");

            // Add user
            $tbServices->insert([
                'name' => $service,
                'fullname' => $shortName
            ]);

            echo $this->_fgColor('green', 'OK');
        } else {
            echo $this->_fgColor('purple', "\nService '{$service}' already exists. Skipped.");
        }

        return $this;
    }

    /**
     * Copy one or more files from $src to $dest.
     *
     * @param $src mixed Source file path. ARRAY of files accepted.
     * @param $dest string Target file or directory.
     * @return self.
     */
    private function _copyFile($src, $dest)
    {
        if (!is_array($src)) {
            $src = [ $src ];
        }

        foreach ($src as $v) {
            $fileName = basename($v);
            echo $this->_fgColor('purple', "\nCopying '{$fileName}' to '{$dest}'... ");
            exec(self::$cmd_cp . " {$v} {$dest} 2>&1", $this->_output);
            echo $this->_fgColor('green', 'OK');
        }

        return $this;
    }

    /**
     * Returns the contents of an ini file as array.
     *
     * @param $file string Path to ini file.
     * @return array.
     */
    private function _getIniFile($file)
    {
        try {
            // Load file
            echo $this->_fgColor('purple', "\nRetrieving INI file '{$file}'... ");
            $res = IniFile::load($file)->toArray();

        } catch (\Exception $e) {
            $this->_output[] = $e->getMessage();
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nError al abrir '{$file}': {$e->getMessage()}. ");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        return $res;
    }

    /**
     * Edits and saves an ini file.
     *
     * @param $file string Path to ini file.
     * @param $data array Data to add / update / delete.
     * @param $operation string Type of operation:
     *                          add: Add or update data (by overwriting existent sections in ini file).
     *                          delete: Delete an entire section ($data must contain the key(s) to delete).
     * @return mixed.
     */
    private function _editIniFile($file, array $data, $operation = 'add')
    {
        try {
            echo $this->_fgColor('purple', "\nEditing INI file {$file}... ");

            // Load file
            $raw = IniFile::load($file)->toArray();

            // Adds or Updates
            if ($operation == 'add') {
                $raw = array_merge($raw, $data);
            } elseif ($operation == 'delete') {
                $raw = array_diff_key($raw, array_flip($data));
            }

            // Save
            $iniFile = IniFile\Factory::fromArray($raw)->save($file);

            echo $this->_fgColor('green', 'OK');

        } catch (\Exception $e) {
            $this->_output[] = $e->getMessage();
            echo $this->_fgColor('bold_red', "\nError al manipular '{$file}'. ");

            return false;
        }

        return $this;
    }

    /**
     * Creates a .gitkeep file inside the desired directory/ies.
     *
     * @param $directories mixed Directory/ies to be created.
     * @return self.
     */
    private function _createGitkeepFile($directories)
    {
        if (!is_array($directories)) {
            $directories = [ $directories ];
        }

        foreach ($directories as $v) {

            if (is_dir($v)) {
                echo $this->_fgColor('purple', "\nAdding .gitkeep file to {$v}... ");
                exec(self::$cmd_touch . " {$v}/.gitkeep 2>&1", $this->_output);
                echo $this->_fgColor('green', 'OK');
            }
        }

        return $this;
    }

    /**
     * Sets owner, group and permissions to a file or directory.
     *
     * @param $file mixed File/s or Directory/ies to work with.
     * @param $owner string Owner name.
     * @param $group string Group name.
     * @param $permissions integer Permissions in OCTAL format (ie. "755").
     * @param $recursive boolean Apply settings recursively.
     * @return self.
     */
    private function _setFileOptions($files, $owner = null, $group = null, $permissions = null, $recursive = false)
    {
        $sudoPassword = false;
        if (!is_array($files)) {
            $files = [ $files ];
        }

        // Command options
        $options = [];
        if ($recursive) {
            $options[] = '-R';
        }
        $options = implode(' ', $options);

        foreach ($files as $v) {

            // Sudo required if chown or chmod needed
            if ($sudoPassword === false) {
                echo "\nSetting owner, group or permissions requires root access (via 'sudo').";
                $sudoPassword = $this->_getSudoPassword();
            }

            // Owner
            if ($owner) {
                echo $this->_fgColor('purple', "\nChanging owner of '{$v}' to '{$owner}'... ");
                exec(self::$cmd_echo . " {$sudoPassword} | "
                    . self::$cmd_sudo . " -S " . self::$cmd_chown . " {$options} {$owner} {$v} 2>&1", $this->_output);
                echo $this->_fgColor('green', 'OK');
            }

            // Group
            if ($group) {
                echo $this->_fgColor('purple', "\nChanging group of '{$v}' to '{$group}'... ");
                exec(self::$cmd_echo . " {$sudoPassword} | "
                    . self::$cmd_sudo . " -S " . self::$cmd_chown . " {$options} :{$group} {$v} 2>&1", $this->_output);
                echo $this->_fgColor('green', 'OK');
            }

            // Permissions
            if ($permissions) {
                echo $this->_fgColor('purple', "\nChanging permissions of '{$v}' to '{$permissions}'... ");
                exec(self::$cmd_echo . " {$sudoPassword} | "
                    . self::$cmd_sudo . " -S " . self::$cmd_chmod . " {$options} {$permissions} {$v} 2>&1", $this->_output);
                echo $this->_fgColor('green', 'OK');
            }
        }

        return $this;
    }

    /**
     * Creates one or more directories.
     *
     * @param $directories mixed Directory/ies to be created.
     * @return self.
     */
    private function _createDir($directories)
    {
        if (!is_array($directories)) {
            $directories = [ $directories ];
        }

        foreach ($directories as $v) {

            // Directory already exists
            if (is_dir($v)) {
                echo $this->_fgColor('red', "\nTarget directory already exists: '{$v}'."
                    . "\nDirectory will be REPLACED.\n");
                if (trim(strtolower(readline('Do you want to proceed? (Y/N): '))) != 'y') {

                    continue;
                }

                // Delete dest directory
                echo $this->_fgColor('purple', "Deleting {$v}... ");
                exec(self::$cmd_rm . " -rf {$v} 2>&1", $this->_output);
                echo $this->_fgColor('green', 'OK');
            }

            // Create directory
            echo $this->_fgColor('purple', "\nCreating directory {$v}... ");
            exec(self::$cmd_mkdir . " -p {$v} 2>&1", $this->_output);
            echo $this->_fgColor('green', 'OK');
        }

        return $this;
    }

    /**
     * Replaces all texts from model app to match the ones provided by the new app.
     *
     * @param $appPath string Target application path.
     * @param $profile array Profile data.
     * @return mixed.
     */
    private function _doBranding($appPath, array $profile)
    {
        chdir($appPath);

        echo $this->_fgColor('purple', "\nReplacing texts and branding... ");

        ////
        // config.xml
        ////

        $file = "{$appPath}/config.xml";
        if (($fileStr = @file_get_contents($file)) === false) {
            echo $this->_fgColor('bold_red', "\nError: Could not read '{$file}'.");

            return false;
        }

        // id
        $regex = '/id="([^"]*)"/us';
        $fileStr = preg_replace($regex, "id=\"com.imaat.mprocer.{$profile['application']['id']}\"", $fileStr);

        // name
        $regex = '@<name>(.*)</name>@us';
        $fileStr = preg_replace($regex, "<name>{$profile['company']['shortName']}</name>", $fileStr);

        // description
        $regex = '@<description>(.*)</description>@us';
        $fileStr = preg_replace($regex, "<description>{$profile['company']['description']}</description>", $fileStr);

        if ($fileStr) {
            if (@file_put_contents($file, $fileStr) === false) {
                echo $this->_fgColor('bold_red', "\nError: Could not save in '{$file}'.");

                return false;
            }
        } else {
            echo $this->_fgColor('bold_red', "\nError: Some regex didn't match in '{$file}'.");

            return false;
        }

        ////
        // js/Config.js
        ////

        $file = "{$appPath}/js/Config.js";
        if (($fileStr = @file_get_contents($file)) === false) {
            echo $this->_fgColor('bold_red', "\nError: Could not read '{$file}'.");

            return false;
        }

        // api.core.service
        $regex = '@service: "[^"]+" // api\.core\.service@u';
        $fileStr = preg_replace($regex, "service: \"{$profile['application']['id']}\" // api.core.service", $fileStr);

        // custom.header.title
        $regex = '@title: "[^"]+" // custom\.header\.title@u';
        $fileStr = preg_replace($regex, "title: \"{$profile['company']['shortName']}\" // custom.header.title", $fileStr);

        // service.name
        $regex = '@name: "[^"]+", // service\.name@u';
        $fileStr = preg_replace($regex, "name: \"{$profile['company']['name']}\", // service.name", $fileStr);

        // service.shortName
        $regex = '@shortName: "[^"]+", // service\.shortName@u';
        $fileStr = preg_replace($regex, "shortName: \"{$profile['company']['shortName']}\", // service.shortName", $fileStr);

        // service.corporateName
        $regex = '@corporateName: "[^"]+", // service\.corporateName@u';
        $fileStr = preg_replace($regex, "corporateName: \"{$profile['company']['corporateName']}\", // service.corporateName", $fileStr);

        // service.address
        $regex = '@address: "[^"]+", // service\.address@u';
        $fileStr = preg_replace($regex, "address: \"{$profile['company']['address']}\", // service.address", $fileStr);

        // service.zipCode
        $regex = '@zipCode: "[^"]+", // service\.zipCode@u';
        $fileStr = preg_replace($regex, "zipCode: \"{$profile['company']['zipCode']}\", // service.zipCode", $fileStr);

        // service.city
        $regex = '@city: "[^"]+", // service\.city@u';
        $fileStr = preg_replace($regex, "city: \"{$profile['company']['city']}\", // service.city", $fileStr);

        // service.country
        $regex = '@country: "[^"]+", // service\.country@u';
        $fileStr = preg_replace($regex, "country: \"{$profile['company']['country']}\", // service.country", $fileStr);

        // service.phone
        $regex = '@phone: "[^"]+", // service\.phone@u';
        $fileStr = preg_replace($regex, "phone: \"{$profile['company']['phone']}\", // service.phone", $fileStr);

        // service.www
        $regex = '@www: "[^"]+", // service\.www@u';
        $fileStr = preg_replace($regex, "www: \"{$profile['company']['www']}\", // service.www", $fileStr);

        // service.officeGeoCoordinates.lat
        $regex = '@lat: "[^"]+", // service\.officeGeoCoordinates\.lat@u';
        $fileStr = preg_replace(
            $regex,
            "lat: \"{$profile['company']['officeGeoCoordinates']['lat']}\", // service.officeGeoCoordinates.lat",
            $fileStr);

        // service.officeGeoCoordinates.lng
        $regex = '@lng: "[^"]+" // service\.officeGeoCoordinates\.lng@u';
        $fileStr = preg_replace(
            $regex,
            "lng: \"{$profile['company']['officeGeoCoordinates']['lng']}\" // service.officeGeoCoordinates.lng",
            $fileStr);

        // service.email.info
        $regex = '@info: "[^"]+", // service\.email\.info@u';
        $fileStr = preg_replace(
            $regex,
            "info: \"{$profile['company']['email']['info']}\", // service.email.info",
            $fileStr);

        // service.email.sales
        $regex = '@sales: "[^"]+" // service\.email\.sales@u';
        $fileStr = preg_replace(
            $regex,
            "sales: \"{$profile['company']['email']['sales']}\" // service.email.sales",
            $fileStr);

        if ($fileStr) {
            if (@file_put_contents($file, $fileStr) === false) {
                echo $this->_fgColor('bold_red', "\nError: Could not save in '{$file}'.");

                return false;
            }
        } else {
            echo $this->_fgColor('bold_red', "\nError: Some regex didn't match in '{$file}'.");

            return false;
        }

        ////
        // package.json
        ////

        $file = "{$appPath}/package.json";
        if (($fileStr = @file_get_contents($file)) === false) {
            echo $this->_fgColor('bold_red', "\nError: Could not read '{$file}'.");

            return false;
        }

        // repository.url
        $regex = '@"url": "[^"]+"@u';
        $repoUrl = str_replace(
            [ '%REPOSITORY_NAME%', '%SSH_ID%' ],
            [ $profile['repository']['name'], 'bitbucket.org' ],
            self::BITBUCKET_REPO_URL
        );
        $fileStr = preg_replace(
            $regex,
            "\"url\": \"{$repoUrl}\"",
            $fileStr);

        // homepage
        $regex = '@"homepage": "[^"]+"@u';
        $fileStr = preg_replace(
            $regex,
            "\"homepage\": \"https://bitbucket.org/imaat/{$profile['repository']['name']}#readme\"",
            $fileStr);

        if ($fileStr) {
            if (@file_put_contents($file, $fileStr) === false) {
                echo $this->_fgColor('bold_red', "\nError: Could not save in '{$file}'.");

                return false;
            }
        } else {
            echo $this->_fgColor('bold_red', "\nError: Some regex didn't match in '{$file}'.");

            return false;
        }

        ////
        // bower.json
        ////

        $file = "{$appPath}/bower.json";
        if (($fileStr = @file_get_contents($file)) === false) {
            echo $this->_fgColor('bold_red', "\nError: Could not read '{$file}'.");

            return false;
        }

        // homepage
        $regex = '@"homepage": "[^"]+"@u';
        $fileStr = preg_replace(
            $regex,
            "\"homepage\": \"https://bitbucket.org/imaat/{$profile['repository']['name']}#readme\"",
            $fileStr);

        if ($fileStr) {
            if (@file_put_contents($file, $fileStr) === false) {
                echo $this->_fgColor('bold_red', "\nError: Could not save in '{$file}'.");

                return false;
            }
        } else {
            echo $this->_fgColor('bold_red', "\nError: Some regex didn't match in '{$file}'.");

            return false;
        }

        ////
        // css/_base.scss
        ////

        $file = "{$appPath}/css/_base.scss";
        if (($fileStr = @file_get_contents($file)) === false) {
            echo $this->_fgColor('bold_red', "\nError: Could not read '{$file}'.");

            return false;
        }

        // themeDarkPrimaryColor
        $regex = '@themeDarkPrimaryColor: [^;]+;@u';
        $fileStr = preg_replace($regex, "themeDarkPrimaryColor: {$profile['theme']['darkPrimaryColor']};", $fileStr);

        // themePrimaryColor
        $regex = '@themePrimaryColor: [^;]+;@u';
        $fileStr = preg_replace($regex, "themePrimaryColor: {$profile['theme']['primaryColor']};", $fileStr);

        // themeLightPrimaryColor
        $regex = '@themeLightPrimaryColor: [^;]+;@u';
        $fileStr = preg_replace($regex, "themeLightPrimaryColor: {$profile['theme']['lightPrimaryColor']};", $fileStr);

        // themeTextIcons
        $regex = '@themeTextIcons: [^;]+;@u';
        $fileStr = preg_replace($regex, "themeTextIcons: {$profile['theme']['textIcons']};", $fileStr);

        // themeAccentColor
        $regex = '@themeAccentColor: [^;]+;@u';
        $fileStr = preg_replace($regex, "themeAccentColor: {$profile['theme']['accentColor']};", $fileStr);

        // themePrimaryText
        $regex = '@themePrimaryText: [^;]+;@u';
        $fileStr = preg_replace($regex, "themePrimaryText: {$profile['theme']['primaryText']};", $fileStr);

        // themeSecondaryText
        $regex = '@themeSecondaryText: [^;]+;@u';
        $fileStr = preg_replace($regex, "themeSecondaryText: {$profile['theme']['secondaryText']};", $fileStr);

        if ($fileStr) {
            if (@file_put_contents($file, $fileStr) === false) {
                echo $this->_fgColor('bold_red', "\nError: Could not save in '{$file}'.");

                return false;
            }
        } else {
            echo $this->_fgColor('bold_red', "\nError: Some regex didn't match in '{$file}'.");

            return false;
        }

        echo $this->_fgColor('green', 'OK');

        return $this;
    }

    /**
     * Build app and Push (to "master" branch). App wil be ready to PGB.
     * This process is done via GRUNT command.
     *
     * @param $appPath string Target application path.
     * @param $profileImagesPath string Path to profile images path. They will be copied to target app path.
     * @return self.
     */
    private function _generateImages($appPath, $profileImagesPath)
    {
        chdir($appPath);

        echo $this->_fgColor('purple', "\nGenerating icons, splashscreens and initial screens for stores... ");
        exec(self::$cmd_rsync . " {$profileImagesPath}/*.png res/raw/original 2>&1", $this->_output);
        exec(self::$cmd_grunt . " imagemagick-convert responsive_images 2>&1", $this->_output);
        echo $this->_fgColor('green', 'OK');

        return $this;
    }

    /**
     * Build app and Push (to "master" branch). App wil be ready to PGB.
     * This process is done via GRUNT command.
     *
     * @param $appPath string Target application path.
     * @return self.
     */
    private function _build($appPath)
    {
        chdir($appPath);

        // Build
        echo $this->_fgColor('purple', "\nBuilding app and Pushing to 'master' branch... ");
        exec(self::$cmd_grunt . " sass 2>&1", $this->_output);
        exec(self::$cmd_grunt . " master 2>&1", $this->_output);
        echo $this->_fgColor('green', 'OK');

        return $this;
    }

    /**
     * Performs a GIT add, commit and push operation over a project.
     *
     * @param $appPath string Application path.
     * @param $files array Files to commit (relative path from $appPath).
     *                     If none specified, a "git add -A" operation will be performed.
     * @param $comments string A custom comment for commit.
     *                         IMPORTANT: Don't add single quotes inside the comment.
     * @return self.
     */
    private function _push($appPath, array $files = array(), $comments = null)
    {
        chdir($appPath);

        exec(self::$cmd_git . ' rev-parse --abbrev-ref HEAD', $output);
        $branch = current($output);
        echo $this->_fgColor('purple', "\nCommitting app and Pushing to '{$branch}' branch... ");
        if ($files) {
            $files = implode(' ', $files);
        } else {
            $files = '-A';
        }
        if (!$comments) {
            $comments = 'Nuevo commit desde Main.php';
        }
        exec(self::$cmd_git . " add {$files} 2>&1", $this->_output);
        exec(self::$cmd_git . " commit -m '{$comments}' 2>&1", $this->_output);
        exec(self::$cmd_git . " push 2>&1", $this->_output);
        echo $this->_fgColor('green', 'OK');

        return $this;
    }

    /**
     * Initialize a GIT repository in the desired folder.
     *
     * @param $appPath string Target application path.
     * @param $repoName string Repository name.
     * @return mixed.
     */
    private function _gitInit($appPath, $repoName)
    {
        chdir($appPath);

        $repoUrl = str_replace(
            [ '%REPOSITORY_NAME%', '%SSH_ID%' ],
            [ $repoName, $this->_cfg['ssh']['id'] ],
            self::BITBUCKET_REPO_URL
        );

        // Initialize repo
        echo $this->_fgColor('purple', "\nInitializing GIT repository '{$repoName}'... ");
        exec(self::$cmd_git . " init 2>&1", $this->_output);
        exec(self::$cmd_git . " remote add origin {$repoUrl} 2>&1", $this->_output);
        exec(self::$cmd_git . " fetch 2>&1", $this->_output);
        echo $this->_fgColor('green', 'OK');

        // Check if repo is empty (no commits)
        if ($this->_isEmptyRepo($appPath)) {

            // Checkout and create development branch and perform initial commit
            echo $this->_fgColor('purple', "\nCreating 'development' branch and performing initial commit... ");
            exec(self::$cmd_git . " checkout -b development 2>&1", $this->_output);
            exec(self::$cmd_git . " add -A 2>&1", $this->_output);
            exec(self::$cmd_git . " commit -m 'Initial commit to development branch.' 2>&1", $this->_output);
            exec(self::$cmd_git . " push -u origin development 2>&1", $this->_output);
            echo $this->_fgColor('green', 'OK');

            // Checkout and create master branch and perform initial commit
            echo $this->_fgColor('purple', "\nCreating 'master' branch and performing initial commit... ");
            exec(self::$cmd_git . " checkout --orphan master 2>&1", $this->_output);
            exec(self::$cmd_git . " rm --cached $(git ls-files) 2>&1", $this->_output);
            exec(self::$cmd_git . " add -A 2>&1", $this->_output);
            exec(self::$cmd_git . " commit -m 'Initial commit to master branch.' 2>&1", $this->_output);
            exec(self::$cmd_git . " push -u origin master 2>&1", $this->_output);
            echo $this->_fgColor('green', 'OK');
        } else {
            echo $this->_fgColor('red', "\nRemote repository is not empty: '{$appPath}'.\n");
            if (trim(strtolower(readline('Do you want to overwrite with local changes? (Y/N): '))) != 'y') {

                return false;
            }

            // Checkout with more recent changes from GIT server
            echo $this->_fgColor('purple', "Performing git-checkout over current directory... ");
            exec(self::$cmd_git . " clone --no-checkout -b development {$repoUrl} .git-tmp 2>&1", $this->_output);
            exec(self::$cmd_rm . " -rf .git", $this->_output);
            exec(self::$cmd_mv . " .git-tmp/.git .", $this->_output);
            exec(self::$cmd_rm . " -rf .git-tmp", $this->_output);
            exec(self::$cmd_git . " reset HEAD", $this->_output);
            echo $this->_fgColor('green', 'OK');
        }

        return $this;
    }

    /**
     * Copies a directory recursively.
     *
     * @param $src string Source directory name.
     * @param $dest string Target directory name.
     * @param $exclude array Files to exclude.
     * @return mixed.
     */
    private function _replicateDir($src, $dest, array $exclude = array())
    {
        if (is_dir($dest)) {
            echo $this->_fgColor('red', "\nTarget directory already exists: '$dest'."
                . "\nDirectory will be REPLACED (NOT RECOMMENDED, use 'merge' command to sync code).\n");
            if (trim(strtolower(readline('Do you want to proceed? (Y/N): '))) != 'y') {

                return false;
            }

            // Delete dest directory
            echo $this->_fgColor('purple', "Deleting {$dest}... ");
            exec(self::$cmd_rm . " -rf {$dest} 2>&1", $this->_output);
            echo $this->_fgColor('green', 'OK');
        }

        // Copy directory recursively
        //
        // "/" included to copy all files inside directory instead of copying directory. Without "/", directory
        // will be created like dest/src/* instead of dest/*
        $exclude = implode(' ', array_map(function ($v) { return "--exclude='$v'"; }, $exclude));
        echo $this->_fgColor('purple', "\nReplicating source to {$dest}... ");
        exec(self::$cmd_rsync . " -a {$exclude} {$src}/ {$dest} 2>&1", $this->_output);
        echo $this->_fgColor('green', 'OK');

        return $this;
    }

    /**
     * Checks that the current branch in directory is the one we need.
     *
     * @param $src string Path to directory.
     * @param $branch string Branch name.
     * @return boolean.
     */
    private function _isBranch($src, $branch)
    {
        chdir($src);
        exec(self::$cmd_git . ' rev-parse --abbrev-ref HEAD', $output);
        $res = current($output) == $branch;

        return $res;
    }

    /**
     * Checks whether the repo is empty or not.
     *
     * @param $src string Path to app directory.
     * @return boolean.
     */
    private function _isEmptyRepo($src)
    {
        chdir($src);
        exec(self::$cmd_git . " rev-list -n 1 --all 2>&1", $output, $status);
        $res = ($status != 0);

        return $res;
    }

    /**
     * Returns the contents of $file (being $file a file in JSON format).
     *
     * @param $file string Path to file.
     * @return mixed.
     */
    private function _getJsonFile($file)
    {
        echo $this->_fgColor('purple', "\nRetrieving JSON file '{$file}'... ");
        if (($res = @file_get_contents($file)) === false) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nError: Could not read profile data file '{$file}'.");

            return false;
        }
        if (!$res = json_decode($res, true)) {
            echo $this->_fgColor('red', 'X');
            echo $this->_fgColor('bold_red', "\nError: Bad JSON format or character set in profile data file.");

            return false;
        }
        echo $this->_fgColor('green', 'OK');

        return $res;
    }

    /**
     * Reads application required data for cloning it from terminal.
     *
     * @param $file string Path to the profile data file.
     * @param $options array Validator options:
     *                       "ignore" array Validations to ignore [repository]
     * @return mixed.
     */
    private function _loadDataFromFile($file, array $options = array())
    {
        // Defaults
        $options = array_merge(
            [
                'ignore' => []
            ],
            $options
        );

        if (!$res = $this->_getJsonFile($file)) {

            return false;
        }

        // Repository - Name
        if (!isset($res['repository']['name'])) {
            echo $this->_fgColor('bold_red', "\nError: 'repository->name' is a required field.");

            return false;
        }
        $pattern = "/^[a-z0-9-]{5,30}$/";
        if (!preg_match($pattern, $res['repository']['name'])) {
            echo $this->_fgColor('bold_red', "\nError: 'repository->name' must match pattern '{$pattern}'.");

            return false;
        }

        // Validate that repository exists in BitBucket
        if (!in_array('repository', $options['ignore'])) {
            echo $this->_fgColor('purple', "\nValidating repository... ");
            $repo = str_replace('%REPOSITORY_NAME%', $res['repository']['name'], self::BITBUCKET_API_REPO);
            $httpCode = substr(current(get_headers($repo)), 9, 3);
            if ($httpCode != 403) { // 403 = FORBIDDEN (but exists)
                echo $this->_fgColor('red', 'X');
                echo $this->_fgColor('bold_red', "\nError: '{$repo}' does not exist in BitBucket."
                    . "\nCheck your 'repository->name' var or create it with 'createRepo' command.");

                return false;
            } else {
                echo $this->_fgColor('green', 'OK');
            }
        }

        // Application - ID
        if (!isset($res['application']['id'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->id' is a required field.");

            return false;
        }
        $pattern = "/^[a-z0-9]{5,20}$/";
        if (!preg_match($pattern, $res['application']['id'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->id' must match pattern '{$pattern}'.");

            return false;
        }

        // Application - Locale
        if (!isset($res['application']['locale'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->locale' is a required field.");

            return false;
        }
        $pattern = "/^[a-z]{2}_[A-Z]{2}\.UTF-8$/";
        if (!preg_match($pattern, $res['application']['locale'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->locale' must match pattern '{$pattern}'.");

            return false;
        }

        // Application - Timezone
        if (!isset($res['application']['timezone'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->timezone' is a required field.");

            return false;
        }
        $pattern = "@^[\w]+/[\w]+/[\w]+$@";
        if (!preg_match($pattern, $res['application']['timezone'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->timezone' must match pattern '{$pattern}'.");

            return false;
        }

        // Application - Default weather location
        if (!isset($res['application']['defaultWeather'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->defaultWeather' is a required field.");

            return false;
        }
        $pattern = "@^[\w]+/[\w]+$@";
        if (!preg_match($pattern, $res['application']['defaultWeather'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->defaultWeather' must match pattern '{$pattern}'.");

            return false;
        }

        // Application - API (Google/API Key)
        if (!isset($res['application']['api']['google']['apiKey'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->api->google->apiKey' is a required field.");

            return false;
        }
        $pattern = "/^[0-9a-z-]{30,}$/i";
        if (!preg_match($pattern, $res['application']['api']['google']['apiKey'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->api->google->apiKey' "
                . "must match pattern '{$pattern}'.");

            return false;
        }

        // Application - API (Google/Project Number)
        if (!isset($res['application']['api']['google']['projectNumber'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->api->google->projectNumber' "
                . "is a required field.");

            return false;
        }
        $pattern = "/^[0-9]{10,}$/";
        if (!preg_match($pattern, $res['application']['api']['google']['projectNumber'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->api->google->projectNumber' "
                . "must match pattern '{$pattern}'.");

            return false;
        }

        // Application - Certificates (Google/Release/Alias)
        if (!isset($res['application']['certificates']['google']['release']['alias'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->google->release->alias' "
                . "is a required field.");

            return false;
        }
        $pattern = "/^[a-z0-9_]{5,30}$/i";
        if (!preg_match($pattern, $res['application']['certificates']['google']['release']['alias'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->google->release->alias' "
                . "must match pattern '{$pattern}'.");

            return false;
        }

        // Application - Certificates (Google/Release/Password)
        if (!isset($res['application']['certificates']['google']['release']['password'])
            || !$res['application']['certificates']['google']['release']['password']) {

            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->google->release->password' "
                . "is a required field.");

            return false;
        }

        // Application - Certificates (Google/Release/Name)
        if (!isset($res['application']['certificates']['google']['release']['name'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->google->release->name' "
                . "is a required field.");

            return false;
        }
        $pattern = "/^[0-9a-z]{3,30}$/i";
        if (!preg_match($pattern, $res['application']['certificates']['google']['release']['name'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->google->release->name' "
                . "must match pattern '{$pattern}'.");

            return false;
        }

        // Application - Certificates (Apple/Push/Passphrase)
        if (!isset($res['application']['certificates']['apple']['push']['passphrase'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->apple->push->passphrase' "
                . "is a required field (but no content inside is required).");

            return false;
        }

        // Application - Certificates (Apple/Distribution/Mobileprovision)
        if (!isset($res['application']['certificates']['apple']['distribution']['mobileprovision'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->apple->distribution->mobileprovision' "
                . "is a required field.");

            return false;
        }
        $pattern = "/^[0-9a-z]{3,30}$/i";
        if (!preg_match($pattern, $res['application']['certificates']['apple']['distribution']['mobileprovision'])) {
            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->apple->distribution->mobileprovision' "
                . "must match pattern '{$pattern}'.");

            return false;
        }

        // Application - Certificates (Apple/Distribution/Password)
        if (!isset($res['application']['certificates']['apple']['distribution']['password'])
            || !$res['application']['certificates']['apple']['distribution']['password']) {

            echo $this->_fgColor('bold_red', "\nError: 'application->certificates->apple->distribution->password' "
                . "is a required field.");

            return false;
        }

        // Company - Name
        if (!isset($res['company']['name'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->name' is a required field.");

            return false;
        }
        $pattern = "/^[\w ]{5,50}$/ui";
        if (!preg_match($pattern, $res['company']['name'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->name' must match pattern '{$pattern}'.");

            return false;
        }

        // Company - Short Name
        if (!isset($res['company']['shortName'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->shortName' is a required field.");

            return false;
        }
        $pattern = "/^[\w ]{5,20}$/ui";
        if (!preg_match($pattern, $res['company']['shortName'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->shortName' must match pattern '{$pattern}'.");

            return false;
        }

        // Company - Corporate Name
        if (!isset($res['company']['corporateName'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->corporateName' is a required field.");

            return false;
        }
        $pattern = "/^[\w ]{5,50}$/ui";
        if (!preg_match($pattern, $res['company']['corporateName'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->corporateName' must match pattern '{$pattern}'.");

            return false;
        }

        // Company - Description
        if (!isset($res['company']['description'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->description' is a required field.");

            return false;
        }
        $pattern = "/^[\w, ]{5,100}$/ui";
        if (!preg_match($pattern, $res['company']['description'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->description' must match pattern '{$pattern}'.");

            return false;
        }
        
        // Company - Address
        if (!isset($res['company']['address'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->address' is a required field.");

            return false;
        }
        $pattern = "/^[\w, °\.-]{5,100}$/ui";
        if (!preg_match($pattern, $res['company']['address'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->address' must match pattern '{$pattern}'.");

            return false;
        }

        // Company - Zip Code
        if (!isset($res['company']['zipCode'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->zipCode' is a required field.");

            return false;
        }

        # @Docs: https://en.wikipedia.org/wiki/List_of_postal_codes
        $pattern = "/^[A-Z]{1}\d{4}[A-Z]{3}$/"; // Argentina
        if (!preg_match($pattern, $res['company']['zipCode'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->zipCode' must match pattern '{$pattern}'.");

            return false;
        }

        // Company - City
        if (!isset($res['company']['city'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->city' is a required field.");

            return false;
        }
        $pattern = "/^[\w ]{3,50}$/ui";
        if (!preg_match($pattern, $res['company']['city'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->city' must match pattern '{$pattern}'.");

            return false;
        }

        // Company - Country
        if (!isset($res['company']['country'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->country' is a required field.");

            return false;
        }
        $pattern = "/^[\w ]{3,30}$/ui";
        if (!preg_match($pattern, $res['company']['country'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->country' must match pattern '{$pattern}'.");

            return false;
        }

        // Company - Phone
        if (!isset($res['company']['phone'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->phone' is a required field.");

            return false;
        }
        $pattern = "/^\(\+\d{1,3}\) \d{1,3} \d{1,4}\-?\d{1,4}?$/"; // International
        if (!preg_match($pattern, $res['company']['phone'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->phone' must match pattern '{$pattern}'.");

            return false;
        }

        // Company - Web Site
        if (!isset($res['company']['www'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->www' is a required field.");

            return false;
        }
        if (!filter_var($res['company']['www'], FILTER_VALIDATE_URL)) {
            echo $this->_fgColor('bold_red', "\nError: 'company->www' must be a valid URL or URI.");

            return false;
        }

        // Company - officeGeoCoordinates
        if (!isset($res['company']['officeGeoCoordinates']['lat'])
            || !isset($res['company']['officeGeoCoordinates']['lng'])) {

            echo $this->_fgColor('bold_red', "\nError: 'company->officeGeoCoordinates' is a required field.");

            return false;
        }
        $patternLat = "/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/";
        $patternLng = "/^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/";
        if (!preg_match($patternLat, $res['company']['officeGeoCoordinates']['lat'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->officeGeoCoordinates->lat' "
                . "must match pattern '{$patternLat}'.");

            return false;
        }
        if (!preg_match($patternLng, $res['company']['officeGeoCoordinates']['lng'])) {
            echo $this->_fgColor('bold_red', "\nError: 'company->officeGeoCoordinates->lng' "
                . "must match pattern '{$patternLng}'.");

            return false;
        }

        // Company - Emails
        if (!isset($res['company']['email']['info'])
            || !isset($res['company']['email']['sales'])) {

            echo $this->_fgColor('bold_red', "\nError: 'company->email' is a required field.");

            return false;
        }
        if (!filter_var($res['company']['email']['info'], FILTER_VALIDATE_EMAIL)
            || !filter_var($res['company']['email']['sales'], FILTER_VALIDATE_EMAIL)) {

            echo $this->_fgColor('bold_red', "\nError: 'company->email->*' must be a valid email address.");

            return false;
        }

        // Theme
        if (!isset($res['theme']['darkPrimaryColor'])
            || !isset($res['theme']['primaryColor'])
            || !isset($res['theme']['lightPrimaryColor'])
            || !isset($res['theme']['textIcons'])
            || !isset($res['theme']['accentColor'])
            || !isset($res['theme']['primaryText'])
            || !isset($res['theme']['secondaryText'])) {

            echo $this->_fgColor('bold_red', "\nError: 'theme->*' is a required field.");

            return false;
        }
        $pattern = "/#([a-f0-9]{3}){1,2}\b/i";
        if (!preg_match($pattern, $res['theme']['darkPrimaryColor'])
            || !preg_match($pattern, $res['theme']['primaryColor'])
            || !preg_match($pattern, $res['theme']['lightPrimaryColor'])
            || !preg_match($pattern, $res['theme']['textIcons'])
            || !preg_match($pattern, $res['theme']['accentColor'])
            || !preg_match($pattern, $res['theme']['primaryText'])
            || !preg_match($pattern, $res['theme']['secondaryText'])) {

            echo $this->_fgColor('bold_red', "\nError: 'theme->*' must match pattern '{$pattern}'.");

            return false;
        }

        // Partner - Name
        if (!isset($res['partner']['name'])) {
            echo $this->_fgColor('bold_red', "\nError: 'partner->name' is a required field.");

            return false;
        }
        $pattern = "/^[\w]{3,20}$/";
        if (!preg_match($pattern, $res['partner']['name'])) {
            echo $this->_fgColor('bold_red', "\nError: 'partner->name' must match pattern '{$pattern}'.");

            return false;
        }
 
        // Partner - API
        if (!isset($res['partner']['api']['source'])
            || !isset($res['partner']['api']['key'])
            || !isset($res['partner']['api']['url'])) {

            echo $this->_fgColor('bold_red', "\nError: 'partner->api' is a required field.");

            return false;
        }
        $patternSource = "/^[a-z0-9]{3,30}$/";
        $patternKey = "/^[\w]{6,512}$/";
        if (!preg_match($patternSource, $res['partner']['api']['source'])) {
            echo $this->_fgColor('bold_red', "\nError: 'partner->api->source' "
                . "must match pattern '{$patternSource}'.");

            return false;
        }
        if (!preg_match($patternSource, $res['partner']['api']['key'])) {
            echo $this->_fgColor('bold_red', "\nError: 'partner->api->key' must match pattern '{$patternKey}'.");

            return false;
        }
        if (!filter_var($res['partner']['api']['url'], FILTER_VALIDATE_URL)) {
            echo $this->_fgColor('bold_red', "\nError: 'partner->api->url' must be a valid URL or URI.");

            return false;
        }
 
        return $res;
    }
}

$main = new Task_Main();
$main->run();

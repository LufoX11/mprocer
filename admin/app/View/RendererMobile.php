<?php

/**
 * Renderizes a template.
 * This object should be only implemented by Slim.
 *
 * ---
 * Use:
 *
 * $View_RendererMobile = new View_RendererMobile(<options>);
 *
 * ---
 * Options:
 *
 * 'layout': The layout to use for the template. This is the main file container.
 * 'header': The header to use for the layout.
 * 'footer': The footer to use for the layout.
 * 'appCfg': Application configuration.
 */

class View_RendererMobile extends Slim\View
{
    /**
     * @var array Renderer options.
     */
    protected static $_options = array(
        'layout' => 'defaultLayout.tpl',
        'header' => 'defaultHeader.tpl',
        'footer' => null
    );

    /**
     * Builds a new Renderer.
     *
     * @param $options array Initialization options.
     * @return void.
     */
    public function __construct(array $options)
    {
        $domain = $options['domain'] = (isset($options['domain']) ? $options['domain'] : 'public1');
        $uriParts = array_values(array_filter(explode('/', current(explode('?', $_SERVER['REQUEST_URI'])))));
        switch ($domain) {
            case 'admin':
                self::$_options['headerMenuActive'] = (isset($uriParts[0]) ? $uriParts[0] : 'home');
                break;
        }
        self::$_options['View'] = new Hp_View(array('Path', 'Form'), $options['appCfg']);
        self::$_options['uri'] = $options['appCfg']['paths']['web']['site']['base'];
        self::$_options['paths'] = $options['appCfg']['paths']['web'];
        self::$_options['fsPaths'] = $options['appCfg']['paths']['fs'];
        self::$_options['appVersion'] = $options['appCfg']['front']['versioning']['application'];
        self::$_options['applications'] = $options['appCfg']['applications'];
        self::$_options = $options + self::$_options;
    }

    /**
     * Renders the template.
     *
     * @param $template string The template name to use.
     * @return string HTML page content.
     */
    public function render($template)
    {
        // Data for the template
        extract($this->data);
        $View = self::$_options['View'];
        $paths = self::$_options['paths'];
        $fsPaths = self::$_options['fsPaths'];
        $uri = self::$_options['uri'];
        $appVersion = self::$_options['appVersion'];
        $headerMenuActive = self::$_options['headerMenuActive'];
        $tplDirectory = $this->getTemplatesDirectory();
        $jqmDataUrl = current(explode('?', $_SERVER['REQUEST_URI']));

        // set a theme
        $theme = (isset($theme) && $theme ? $theme : null);

        // Adds extra helpers to the View object
        if (isset($viewHelpers) && is_array($viewHelpers)) {
            foreach ($viewHelpers as $v) {
                $View->addHelper($v);
            }
        }

        if (!isset($user)) {
            $user = (isset($_SESSION['AdminUser']) ? $_SESSION['AdminUser'] : null);
        }
        if ($user) {
            if ($user->service == 'web') {
                $serviceAppCfg = self::$_options['applications'][$user->application];
            }
            if ($user->aclGetServiceAccess() != 'all') {
                $serviceName = ucfirst($user->service);
            }
        }

        // Gets header
        $htmlHeader = '';
        if (self::$_options['header']) {
            ob_start();
            require "{$tplDirectory}/" . self::$_options['header'];
            $htmlHeader = ob_get_clean();
        }

        // Gets content
        ob_start();
        require "{$tplDirectory}/{$template}";
        $htmlContent = ob_get_clean();

        // Gets footer
        $htmlFooter = '';
        if (self::$_options['footer']) {
            ob_start();
            require "{$tplDirectory}/" . self::$_options['footer'];
            $htmlFooter = ob_get_clean();
        }

        // Gets full layout
        ob_start();
        require "{$tplDirectory}/" . self::$_options['layout'];
        $res = ob_get_clean();

        return $res;
    }

    ////
    // Setters from now on.
    ////

    public static function setLayout($name)
    {
        self::$_options['layout'] = $name;
    }

    public static function setHeader($name)
    {
        self::$_options['header'] = $name;
    }

    public static function setFooter($name)
    {
        self::$_options['footer'] = $name;
    }

    public static function setDomain($name)
    {
        self::$_options['domain'] = $name;
    }
}

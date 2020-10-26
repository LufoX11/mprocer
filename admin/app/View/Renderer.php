<?php

/**
 * Renderizes a template.
 * This object should be only implemented by Slim.
 *
 * ---
 * Use:
 *
 * $View_Renderer = new View_Renderer(<options>);
 *
 * ---
 * Options:
 *
 * 'layout': The layout to use for the template. This is the main file container.
 * 'header': The header to use for the layout.
 * 'footer': The footer to use for the layout.
 * 'appCfg': Application configuration.
 */

class View_Renderer extends Slim\View
{
    /**
     * @var array Renderer options.
     */
    protected static $_options = array(
        'layout' => 'multipurposeLayout.tpl',
        'header' => null,
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
        self::$_options['Hp_View'] = new Hp_View(array('Path', 'String', 'Form'), $options['appCfg']);
        self::$_options['appCfg'] = $options['appCfg'];
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
        $View = self::$_options['Hp_View'];
        $Hp = array(
            'cfg' => self::$_options['appCfg'],
            'lang' => array(
                'locale' => $_SESSION['locale'],
                'iso' => $_SESSION['isoLang']
            ),
            'templatesDirectory' => $this->getTemplatesDirectory()
        );

        // Adds extra helpers to the View object
        if (isset($viewHelpers) && is_array($viewHelpers)) {
            foreach ($viewHelpers as $v) {
                $View->addHelper($v);
            }
        }

        // Gets header
        $htmlHeader = '';
        if (self::$_options['header']) {
            ob_start();
            require $this->getTemplatesDirectory() . '/' . self::$_options['header'];
            $htmlHeader = ob_get_clean();
        }

        // Gets content
        ob_start();
        require $this->getTemplatesDirectory() . "/{$template}";
        $htmlContent = ob_get_clean();

        // Gets footer
        $htmlFooter = '';
        if (self::$_options['footer']) {
            ob_start();
            require $this->getTemplatesDirectory() . '/' . self::$_options['footer'];
            $htmlFooter = ob_get_clean();
        }

        // Gets full layout
        if (self::$_options['layout']) {
            ob_start();
            require $this->getTemplatesDirectory() . '/' . self::$_options['layout'];
            $res = ob_get_clean();
        } else {
            $res = $htmlContent;
        }

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
}

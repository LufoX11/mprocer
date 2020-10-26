<!DOCTYPE html>
<html lang="<?= $Hp['lang']['iso']; ?>">
    <head>
        <title>:: iMaat ::</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description"
            content="<?= ucwords($View->te('Diseño y Desarrollo de aplicaciones mobile y web sites. E-Mail marketing.')); ?>">
        <meta name="author" content="iMaat Team">
        <meta name="google-site-verification" content="_Egj2SshC-RQVEh0FHTSmILQBLxrBP4NKLH4c0aZJwQ" />

        <!-- CSS -->
        <link href="<?= $View->getCss('site/bootstrap.min.css'); ?>" rel="stylesheet">
        <link href="<?= $View->getCss('site/bootstrap-responsive.min.css'); ?>" rel="stylesheet">
        <link href="<?= $View->getCss('site/main.css'); ?>" rel="stylesheet">
        <link href="<?= $View->getCss('site/m-styles.min.css'); ?>" rel="stylesheet">
        <link href="<?= $View->getCss('site/font-awesome.min.css'); ?>" rel="stylesheet">

        <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' type='text/css'>
        <link rel="image_src" href="<?= $View->getImg('local://thumbnail.png'); ?>">
        <link rel="icon" type="image/ico" href="<?= $View->getImg('local://favicon.ico'); ?>">
    </head>
    <body data-spy="scroll" data-target=".navbar" data-offset='64' onLoad="$.stellar();">

        <!-- GA -->
        <script>

          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-74264251-1', 'auto');
          ga('send', 'pageview');

        </script>

        <div id="preloader"><div id="status">&nbsp;</div></div>

        <!-- Navbar -->
        <div class="navbar navbar-fixed-top" id="navigation">
            <div class="navbar-inner">
                <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    <a href="#intro" class="brand"><img src="<?= $View->getImg('site://logo.png'); ?>"></a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li><a href="#intro"><?= $View->te('Home'); ?></a></li>
                            <li><a href="#solutions-top"><?= $View->te('Soluciones'); ?></a></li>
                            <li><a href="#customers-top"><?= $View->te('Clientes'); ?></a></li>
                            <li><a href="#contact-top"><?= $View->te('Contacto'); ?></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Home -->
        <section id="intro">
            <div class="container">
                <div class="row divide">
                    <div class="span12 margin-carousel-intro">
                        <div id="carousel-intro" class="carousel slide carousel-fade">
                            <div class="carousel-inner">
                                <div class="active item">
                                    <img src="<?= $View->getImg('site://home-slide-simplicity.png'); ?>" />
                                </div>
                                <div class="inactive item">
                                    <img src="<?= $View->getImg('site://home-slide-creativity.png'); ?>" />
                                </div>
                                <div class="inactive item">
                                    <img src="<?= $View->getImg('site://home-slide-perfection.png'); ?>" />
                                </div>
                                <div class="inactive item stopItem">
                                    <img src="<?= $View->getImg('site://home-slide-isologo.png'); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fade-in-up delay animated hidden-phone" id="more">
                <a href="#solutions-top" class="m-btn a-btn red big icn-only"
                    ><i class="icon-sort-down icon-3x pull-left"></i></a>
            </div>
        </section>

        <!-- Solutions -->
        <section id="solutions-top">
            <section id="solutions-top-desktop" class="visible-desktop" data-stellar-background-ratio="0.6"
                    data-stellar-vertical-offset="20">
                <h1 class="header"><?= $View->te('Soluciones'); ?></h1>
                <p class="header"><?= $View->te('¿Qué podemos ofrecerle?'); ?></p>
            </section>
            <section id="solutions-top-mobile" class="hidden-desktop">
                <h1 class="header"><?= $View->te('Soluciones'); ?></h1>
                <p class="header"><?= $View->te('¿Qué podemos ofrecerle?'); ?></p>
            </section>
        </section>
        <section id="solutions">
            <div class="container">
                <div class="row divide">
                    <div class="span12">
                        <ul class="thumbnails">
                            <li class="span4">
                                <div class="thumbnail">
                                    <i class="icon-mobile-phone"></i>
                                    <h4><?= $View->te('Aplicaciones MOBILE'); ?></h4>
                                    <span>iOS + Android + Blackberry + Windows Phone</span><br />
                                    <p><?= $View->te('Desarrollamos aplicaciones para dispositivos móviles en cualquier plataforma y formato.'); ?></p>
                                </div>
                            </li>
                            <li class="span4">
                                <div class="thumbnail">
                                    <i class="icon-laptop"></i>
                                    <h4><?= $View->te('Aplicaciones WEB'); ?></h4>
                                    <span>HTML5 + CSS Responsive + Retina Ready</span>
                                    <p><?= $View->te('Desarrollamos aplicaciones WEB funcionales tanto en Desktop como Mobile.'); ?></p>
                                </div>
                            </li>
                            <li class="span4">
                                <div class="thumbnail">
                                    <i class="icon-envelope"></i>
                                    <h4><?= $View->te('E-Mail Marketing'); ?></h4>
                                    <span><?= $View->te('Redes Sociales + Presencia WEB + Competitividad'); ?></span>
                                    <p><?= $View->te('Diseñamos y realizamos campañas de E-Mail que refuerzan la presencia en Internet.'); ?></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Customers -->
        <section id="customers-top">
            <section id="customers-top-desktop" class="visible-desktop" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
                <h1 class="header"><?= $View->te('Clientes'); ?></h1>
                <p class="header"><?= $View->te('¿Quiénes confían en nosotros?'); ?></p>
            </section>
            <section id="customers-top-mobile" class="hidden-desktop">
                <h1 class="header"><?= $View->te('Clientes'); ?></h1>
                <p class="header"><?= $View->te('¿Quiénes confían en nosotros?'); ?></p>
            </section>
        </section>
        <section id="customers">
            <div class="container">
                <div class="row divide">
                    <div class="span12">
                        <ul class="thumbnails">
                            <li class="span3">
                                <div class="thumbnail" data-placement="top">
                                    <img src="<?= $View->getImg('site://customers/secontur.png'); ?>">
                                </div>
                            </li>
                            <li class="span3">
                                <div class="thumbnail" data-placement="top">
                                    <img src="<?= $View->getImg('site://customers/aaavyt.png'); ?>">
                                </div>
                            </li>
                            <li class="span3">
                                <div class="thumbnail" data-placement="top">
                                    <img src="<?= $View->getImg('site://customers/db.png'); ?>">
                                </div>
                            </li>
                            <li class="span3">
                                <div class="thumbnail" data-placement="top">
                                    <img src="<?= $View->getImg('site://customers/aidacruises.png'); ?>">
                                </div>
                            </li>
                            <li class="span3">
                                <div class="thumbnail" data-placement="top">
                                    <img src="<?= $View->getImg('site://customers/essentialtravel.png'); ?>">
                                </div>
                            </li>
                            <li class="span3">
                                <div class="thumbnail" data-placement="top">
                                    <img src="<?= $View->getImg('site://customers/ventura.png'); ?>">
                                </div>
                            </li>
                            <li class="span3">
                                <div class="thumbnail" data-placement="top">
                                    <img src="<?= $View->getImg('site://customers/laarena.png'); ?>">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="span8 offset2">
                        <h1>Partners</h1>
                    </div>
                    <div class="span12">
                        <ul class="thumbnails">
                            <li class="span3">
                                <div class="thumbnail" data-placement="top">
                                    <img src="<?= $View->getImg('site://customers/amadeus.png'); ?>">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact-top">
            <section id="contact-top-desktop" class="visible-desktop" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
                <h1 class="header"><?= $View->te('Contacto'); ?></h1>
                <p class="header"><?= $View->te('¿Le gustaría conocer más sobre nosotros?'); ?></p>
            </section>
            <section id="contact-top-mobile" class="hidden-desktop">
                <h1 class="header"><?= $View->te('Contacto'); ?></h1>
                <p class="header"><?= $View->te('¿Le gustaría conocer más sobre nosotros?'); ?></p>
            </section>
        </section>
        <section id="contact">
            <div class="container">
                <div class="row divide">
                    <div class="span8">
                        <div class="row">
                            <form action="/ajax/contact" method="post" id="contact-form">
                                <div class="span4">
                                    <label><?= $View->te('Nombre'); ?></label>
                                    <input type="text" required name="name" class="span4"/>
                                </div>
                                <div class="span4">
                                    <label><?= $View->te('Email'); ?></label>
                                    <input type="email" required name="email"  class="span4"/>
                                </div>
                                <div class="span8">
                                    <label><?= $View->te('Mensaje'); ?></label>
                                    <textarea required rows="6" name="message" class="span8"></textarea>
                                </div>
                                <div class="span8">
                                    <div id="contact-alert-box" class="message"><div class="alert"></div></div>
                                    <input type="submit" value="<?= $View->te('Enviar'); ?>" class="m-btn blue"/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="span4" id="address">
                        <p>
                            <a href="mailto:soporte@imaat.com.ar">soporte@imaat.com.ar</a><br />
                            <a href="tel:+541132212742">(+54 11) 3221-2742</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <section id="footer">
            <div class="container">
                <div class="row divide">
                    <div class="span3">
                        <a href="#intro" class="brand"><img src="<?= $View->getImg('site://logo.png'); ?>" alt=""></a>
                        <p>2013 © iMaat</p><br>
                    </div>
                    <div class="span2 offset4">
                        <ul>
                            <li><h5>Menu</h5></li>
                            <li><a href="#intro">Home</a></li>
                            <li><a href="#solutions-top"><?= $View->te('Soluciones'); ?></a></li>
                            <li><a href="#customers-top"><?= $View->te('Clientes'); ?></a></li>
                        </ul>
                    </div>
                    <div class="span2 offset1">
                        <ul>
                            <li><h5>Social</h5></li>
                            <li><a class="facebook" href="http://www.facebook.com/iMaatArgentina" target="_blank">Facebook</a></li>
                            <li><a class="twitter" href="http://www.twitter.com/iMaatArgentina" target="_blank">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- JS -->
        <script type="text/javascript" src="<?= $View->getJs('site/jquery-1.10.2.min.js'); ?>"></script>
        <script type="text/javascript" src="<?= $View->getJs('site/bootstrap.min.js'); ?>"></script>
        <script type="text/javascript" src="<?= $View->getJs('site/home.js'); ?>"></script>
        <script type="text/javascript" src="<?= $View->getJs('site/retina.js'); ?>"></script>
        <script type="text/javascript" src="<?= $View->getJs('site/Main.js'); ?>"></script>
        <script type="text/javascript"
            src="<?= $View->getJs('jquery.plugins/easing/jquery.easing-1.3.pack.js'); ?>"></script>
        <script type="text/javascript"
            src="<?= $View->getJs('jquery.plugins/nicescroll/jquery.nicescroll.min.js'); ?>"></script>
        <script type="text/javascript"
            src="<?= $View->getJs('jquery.plugins/stellar/jquery.stellar.js'); ?>"></script>
        <script type="text/javascript"
            src="<?= $View->getJs('jquery.plugins/form/jquery.form.js'); ?>"></script>
    </body>
</html>

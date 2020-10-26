<?php

/**
 * Common init file.
 */

// Internal char encoding
mb_language('uni');
mb_internal_encoding('UTF-8');

// Special PHP config
setlocale(LC_ALL, 'es_AR.UTF-8');
setlocale(LC_NUMERIC, 'en_US');
date_default_timezone_set('America/Argentina/Buenos_Aires');

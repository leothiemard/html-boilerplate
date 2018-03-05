<?php

// set some headers
header("strict-transport-security: max-age=0"); // disable HSTS

// report all errors for debuging purposes
error_reporting(E_ALL);

// config
require_once 'app/config.php';

// functions
require_once 'app/functions.php';

// composer
require_once 'vendor/autoload.php';

// faker
$faker = Faker\Factory::create();

// process request
isset($_SERVER['QUERY_STRING']) ?: $_SERVER['QUERY_STRING'] = '';
$requestWithoutQueryString = str_replace('?'.$_SERVER['QUERY_STRING'], '', $_SERVER['REQUEST_URI']);
$uri = (isset($_GET['p'])) ? $_GET['p'] : $requestWithoutQueryString;
if (substr($uri,0,1) != '/') {
	$uri = '/' . $uri;
}
$p = $uri;

if ( ! $p) $p = '/index';
if ($p === '/') $p = '/index';
if ( ! file_exists('pages' . $p . '.php')
	&& file_exists('pages/404.php')
) {
	ob_start();
	require('pages/404.php');
	$content = ob_get_clean();
} else {
	ob_start();
	require('pages' . $p . '.php');
	$content = ob_get_clean();
}

// template stack injection
if (@$_ENV &&
	($_ENV['ENVIRONMENT'] === 'development' || $_ENV['ENVIRONMENT'] === 'testing')
) {
	$content = str_replace('</body>', '
		<!-- template stack -->
		<script src="/dist/js/template-stack.js"></script>
		</body>
	', $content);
}

// live reload injection
if (@$_ENV && @$_ENV['ENVIRONMENT'] === 'development') {
	$content = str_replace('</body>', '
		<!-- LiveReload -->
		<script>
			document.write(\'<script src="//\' + (location.host || \'localhost\').split(\':\')[0] + \':35729/livereload.js?snipver=1"></\' + \'script>\')
		</script>
		</body>
	', $content);
}

print $content;

?>

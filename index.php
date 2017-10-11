<?php

// config
require_once 'app/config.php';

// composer
require_once 'vendor/autoload.php';

// faker
$faker = Faker\Factory::create();

// process request
$requestWithoutQueryString = str_replace('?'.$_SERVER['QUERY_STRING'], '', $_SERVER['REQUEST_URI']);
$uri = (isset($_GET['p'])) ? $_GET['p'] : $requestWithoutQueryString;
if (substr($uri,0,1) != '/') {
	$uri = '/' . $uri;
}
$p = $uri;

if ( ! $p) $p = '/index';
if ($p === '/') $p = '/index';
ob_start();
require('pages' . $p . '.php');
$content = ob_get_clean();

// live reload injection
$content = str_replace('</body>', '
	<!-- LiveReload -->
	<script>
		document.write(\'<script src="http://\' + (location.host || \'localhost\').split(\':\')[0] + \':35729/livereload.js?snipver=1"></\' + \'script>\')
		</script>
		</body>
', $content);

print $content;

?>

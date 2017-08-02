<?php



require_once 'inc/faker/autoload.php';
$faker = Faker\Factory::create();

require_once 'app/controllers/autoload.php';

$requestWithoutQueryString = str_replace('?'.$_SERVER['QUERY_STRING'], '', $_SERVER['REQUEST_URI']);

$uri = (isset($_GET['p'])) ? $_GET['p'] : $requestWithoutQueryString;
if (substr($uri,0,1) != '/') {
	$uri = '/' . $uri;
}

// router.php
if (preg_match('/\.(?:png|jpg|jpeg|gif|svg|css|js|mp4|ogg|json|eot|ttf|woff|woff2)/', $uri)) {
	if (preg_match('/\.woff2$/', $uri)) {
		header('Content-Type: application/font-woff2');
	} else if (preg_match('/\.woff$/', $uri)) {
		header('Content-Type: application/font-woff');
	} else if (preg_match('/\.ttf/', $uri)) {
		header('Content-Type: application/x-font-ttf');
	} else if (preg_match('/\.otf$/', $uri)) {
		header('Content-Type: application/x-font-opentype');
	} else if (preg_match('/\.eot$/', $uri)) {
		header('Content-Type: application/vnd.ms-fontobject');
	} else if (preg_match('/\.mp4$/', $uri)) {
		header('Content-Type: application/octet-stream');
	}
	return false;    // serve the requested resource as-is
} else {
	if ( ! $p) $p = '/home';
	if ($p === '/') $p = '/home';
	ob_start();
	require('app/views/pages/' . $p . '.php');
	$content = ob_get_clean();
	print $content;
}
?>

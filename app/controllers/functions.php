<?php

function render($view, $data = []) {
	extract($data);
	ob_start();
	require('app/views/' . $view . '.php');
	print ob_get_clean();
}

function wp_head() {
	print '
		<!-- Stylesheets -->
		<link rel="stylesheet" href="/dist/css/style.css">
	';
}

function get_language_attributes() {
	return 'en';
}
function language_attributes() {
	print get_language_attributes();
}

function bloginfo($param = 'name') {
	print get_bloginfo($param);
}

function get_bloginfo($param = 'name') {
	switch($param) {
		case 'name':
			return 'Blog Title';
		break;
		case 'charset':
			return 'utf-8';
		break;
	}
	return '';
}

function esc_attr($string) {
	return htmlspecialchars($string, ENT_QUOTES);
}

function wp_nav_menu($params) {
	return '';
}

function is_search() {
	return false;
}
function is_single() {
	return false;
}
function is_archive() {
	return false;
}
function is_front_page() {
	return false;
}
function is_page() {
	return false;
}

function home_url() {
	return '';
}

function wp_footer() {

}
function body_class() {

}
function _e($string, $package) {
	print __($string, $package);
}
function __($string, $package) {
	return $string;
}

function asset_url($path) {
	return '/dist/' . $path;
}

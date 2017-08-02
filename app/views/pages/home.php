<?php

render('layout/head');
render('layout/topbar');

component_classic_content([
	'url_background' => '/data/what-is-ploomtech-bg.jpg',
	'url_image' => '/data/what-is-ploom-tech-product.png',
	'link_cta' => 'http://google.com',
	'label_cta' => 'Learn more'
]);

component_classic_content([
	'url_background' => '/data/introductory_offer_bg.jpg',
	'side_image' => 'right',
	'color_schema' => 'light',
	'link_cta' => 'http://google.com',
	'label_cta' => 'Shop now'
]);

render('layout/foot');

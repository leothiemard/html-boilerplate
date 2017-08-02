<?php

function component_classic_content($data = []) {
	global $faker;
	render('components/classic-content', array_merge([
		'title' => $faker->sentence(rand(2,3)),
		'text' => '<p class="lead">' . $faker->sentence(rand(20,100)) . '</p>',
		'url_image' => null,
		'url_background' => null,
		'label_cta' => null,
		'link_cta' => null,
		'color_schema' => 'dark',
		'side_image' => 'left'
	], $data));
}

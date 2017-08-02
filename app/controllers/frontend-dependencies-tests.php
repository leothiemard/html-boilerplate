<?php

ob_start();

	/**
	* Return site name
	**/
	bloginfo();



	/**
	* Called in HTML tag
	* <html <?php language_attributes(); ?>>
	**/
	language_attributes();



	/**
	* Called in charset meta tag
	* <meta charset="<?php bloginfo( 'charset' ); ?>">
	**/
	bloginfo('charset');



	/**
	* Called in head tag : meta tags (title, meta description, etc), script, style
	* ... <?php wp_head(); ?> </head>
	**/
	wp_head();



	/**
	* Called in body tag
	* <body <?php body_class(); ?>>
	**/
	body_class();



	/**
	* Called just before body close
	* <?php wp_footer(); ?></body>
	**/
	wp_footer();

	/**
	 * Generate custom wordpress menu
	 *
	 * @param 	{String} 	$menu_id 	 		Menu id to display
	 * @param array $args {
	 *
	 *		@type string 		$container 			Container type (nav | div)
	 *		@type string  		$container_class 	Class that is applied to the container
	 *		@type string 		$container_id 		The ID that is applied to the container
	 *
	 *		@type string 		$menu_class 		Class that is applied to the menu
	 *		@type string 		$menu_id 			The ID that is applied to the menu
	 *
	 *		@type string		$item_class 		Class that is applied to items
	 *		@type string 		$item_class_active 	Class that is applioe to the active item
	 * }
	 **/
	// bb_nav_menu($menu_id, $args);

	/**
	* Show Wordpress menu
	* Class li active item : current-menu-item
	**/
	// bb_nav_menu( array(
	// 	'container' => 'nav',
	// 	'container_class' => 'class_nav',
	// 	'container_id' => 'id_nav',
	// 	'menu_class' => 'class_menu',
	// 	'menu_id' => 'id_menu',
	// 	'menu_item_class' => 'nav__item'
	// ));



	/**
	* Conditional function : is search page ?
	* true or false
	**/
	is_search();


	/**
	* Conditional function : is single post (blog) ?
	* true or false
	**/
	is_single();



	/**
	* Conditional function : is listing post page (blog) ?
	* true or false
	**/
	is_archive();



	/**
	* Conditional function : is home page ?
	* true or false
	**/
	is_front_page();



	/**
	* Conditional function : is a page (real content page) ?
	* true or false
	**/
	is_page();

ob_clean();

<!doctype html>
<html lang="{{ $lang or 'en' }}">
	<head>
		<!-- Config -->
		<meta charset="{{ $charset or 'utf-8' }}">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="{{ $viewport or 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }}">

		<!-- Metas -->
		@if ($title)
			<title>{{ $title }}</title>
		@endif
		@if ($description)
			<meta name="description" content="{{ $description }}">
		@endif
		@if ($keywords)
			<meta name="keywords" content="{{ implode(',', $keywords) }}">
		@endif

		@if ($og !== false)
			<!-- Schema.org markup for Facebook -->
			@if ($og->url || $root_url)
				<meta property="og:url" content="{{ $og->url or $root_url }}" />
			@endif
			<meta property="og:type" content="website" />
			@if ($og->title || $title)
				<meta property="og:title" content="{{ $og->title or $title }}" />
			@endif
			@if ($og->description || $description)
				<meta property="og:description" content="{{ $og->description or $description }}" />
			@endif
			@if ($og->image || $sharing_image)
				<meta property="og:image" content="{{ $og->image or $sharing_image }}" />
			@endif
		@endif

		@if ($twitter !== false)
			<!-- Schema.org markup for Twitter -->
			@if ($twitter->url || $root_url)
				<meta name="twitter:url" content="{{ $twitter->url or $root_url }}">
			@endif
			@if ($twitter->title || $title)
				<meta name="twitter:title" content="{{ $twitter->title or $title }}">
			@endif
			@if ($twitter->description || $description)
				<meta name="twitter:description" content="{{ $twitter->description or $description }}">
			@endif
			@if ($twitter->image || $sharing_image)
				<meta name="twitter:image:src" content="{{ $twitter->image or $sharing_image }}">
			@endif
		@endif

		<!-- Schema.org markup for Google+ -->
		@if ($title)
			<meta itemprop="name" content="{{ $title }}">
		@endif
		@if ($description)
			<meta itemprop="description" content="{{ $description }}">
		@endif
		@if ($sharing_image)
			<meta itemprop="image" content="{{ $sharing_image }}">
		@endif

		@if ($stylesheets)
			<!-- Stylesheets -->
			@foreach($stylesheets as $stylesheet)
				<link rel="stylesheet" href="{{ $stylesheet }}" type="text/css">
			@endforeach
		@endif

		@if ($scripts)
			<!-- Scripts -->
			@foreach($scripts as $script)
				<script src="{{ $script }}"></script>
			@endforeach
		@endif

		{!! $html !!}

	</head>
	<body class="{{ $body_class }}">

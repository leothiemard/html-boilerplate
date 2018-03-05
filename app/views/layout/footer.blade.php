	@if (@$js_variables)
		<script>
			@foreach ($js_variables as $key=>$value)
				window.{{ $key }} = {!! json_encode($value) !!};
			@endforeach
		</script>
	@endif

	@if (@$stylesheets)
		<!-- Stylesheets -->
		@foreach($stylesheets as $stylesheet)
			@if (@$stylesheet)
				<link rel="stylesheet" href="{{ $stylesheet }}" type="text/css">
			@endif
		@endforeach
	@endif

	@if (@$scripts)
		<!-- Scripts -->
		@foreach($scripts as $script)
			@if (@$script)
				<script src="{{ $script }}"></script>
			@endif
		@endforeach
	@endif

	@if (@$webfonts)
		<!-- Webfonts -->
		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
		<script>
			WebFont.load({
				google: {
					families: [
						@foreach ($webfonts as $webfont)
							'{{ $webfont }}',
						@endforeach
					]
				}
			});
		</script>
	@endif

	@if (@$google_analytics_id)
		<!-- Google Analytics -->
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			ga('create', '{{ $google_analytics_id }}', 'auto');
			ga('send', 'pageview');
		</script>
	@endif

	{!! @$html !!}

	</body>
</html>

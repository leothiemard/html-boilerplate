		@if ($scripts)
			<!-- Scripts -->
			@foreach($scripts as $script)
				<script src="{{ $script }}"></script>
			@endforeach
		@endif

		@if ($webfonts)
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

		@if ($ga)
			<!-- Google Analytics -->
			<script>
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

				ga('create', '{{ $ga }}', 'auto');
				ga('send', 'pageview');
			</script>
		@endif

		{!! $html !!}

	</body>
</html>

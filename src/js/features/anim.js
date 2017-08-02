import __whenInViewport from 'coffeekraken-sugar/js/dom/whenInViewport'

window.addEventListener('WebComponentsReady', () => {
	[].forEach.call(document.querySelectorAll('[anim-in]'), (elm) => {
		let offsetBottom = window.innerHeight * .25 * -1;
		offsetBottom = 0;
		if (elm.hasAttribute('anim-in-offset-bottom')) {
			offsetBottom = parseFloat(elm.getAttribute('anim-in-offset-bottom'));
		}
		__whenInViewport(elm, {
			top : 0,
			bottom : offsetBottom
		}).then((elm) => {
			elm.setAttribute('anim-play', true);
		});
	});
});

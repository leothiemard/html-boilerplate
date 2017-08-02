import __whenInViewport from 'coffeekraken-sugar/js/dom/whenInViewport';
(() => {
	[].forEach.call(document.querySelectorAll('img[lazy-src]'), (imgElm) => {
		let offsetBottom = 20;
		__whenInViewport(imgElm, {
			bottom : offsetBottom
		}).then((imgElm) => {
			imgElm.setAttribute('src', imgElm.getAttribute('lazy-src'));
		});
	});
})();

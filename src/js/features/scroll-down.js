import __scrollTo from 'coffeekraken-sugar/js/dom/scrollTo';
import __easeInOutQuad from 'coffeekraken-sugar/js/easings/easeInOutQuad';
(() => {
	[].forEach.call(document.querySelectorAll('[scroll-to]'), (scrollDownElm) => {
		scrollDownElm.addEventListener('click', (e) => {
			const target = e.currentTarget.getAttribute('scroll-to');
			__scrollTo(document.querySelector(target), 500, __easeInOutQuad, 100);
		});
	});
})();

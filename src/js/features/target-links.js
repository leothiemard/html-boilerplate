import __scrollTo from 'coffeekraken-sugar/js/dom/scrollTo';
import __ease from 'coffeekraken-sugar/js/easings/easeInOutQuad';
(() => {
	[].forEach.call(document.querySelectorAll('a[target^="#"]'), (linkElm) => {
		linkElm.addEventListener('click', (e) => {
			e.preventDefault();
			const linkElm = e.currentTarget;
			const target = e.currentTarget.target;
			const targetElm = document.querySelector(target);
			if (targetElm) {
				// scroll to target
				__scrollTo(targetElm, 300, __ease, 100);
				setTimeout(() => {
					switch(targetElm.tagName.toLowerCase()) {
						case 'iframe':
							targetElm.setAttribute('src', linkElm.href);
						break;
					}
				}, 300);
			}
		});
	});
})();

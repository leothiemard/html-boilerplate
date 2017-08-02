import __throttle from 'coffeekraken-sugar/js/utils/functions/throttle';
(() => {

	[].forEach.call(document.querySelectorAll('[inline-height]'), (elm) => {
		const setHeight = __throttle(resetHeight, 250);
		window.addEventListener('resize', (e) => {
			elm.style.height = '';
			setHeight(elm);
		});
		setHeight(elm);
	})
})();

function resetHeight(elm) {
	elm.style.height = elm.offsetHeight + 'px';
}

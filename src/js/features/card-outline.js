import __prependChild from 'coffeekraken-sugar/js/dom/prependChild';

function getStrokeLength(rectElm) {
	if (rectElm.getTotalLength) {
		return rectElm.getTotalLength();
	}
	const rect = rectElm.parentNode.getBoundingClientRect();
	return Math.ceil(rect.width * 2 + rect.height * 2) + 100;
}

function setStrokeWidth(rectElm) {
	const length = getStrokeLength(rectElm);
	rectElm.style.strokeDasharray = length;
	rectElm.style.strokeDashoffset = length;
}
window.addEventListener('resize', () => {
	[].forEach.call(document.querySelectorAll('html:not(.ua-ie-11) .card.card--outline[anim-in]'), (cardElm) => {
		const rectElm = cardElm.querySelector('rect');
		if ( ! rectElm) return;
		setStrokeWidth(rectElm);
	});
});
window.addEventListener('WebComponentsReady', () => {
	[].forEach.call(document.querySelectorAll('html:not(.ua-ie-11) .card.card--outline[anim-in]'), (cardElm) => {
		const containerElm = document.createElement('div');
		containerElm.innerHTML = `
			<svg class="card__stroke" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
				<rect fill="transparent" width="100%" height="100%"></rect>
			</svg>
		`;
		__prependChild(containerElm, cardElm);

		const rectElm = cardElm.querySelector('rect');
		if ( ! rectElm) return;
		setStrokeWidth(rectElm);
	});

});

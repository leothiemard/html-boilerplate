window.addEventListener('WebComponentsReady', () => {
	[].forEach.call(document.querySelectorAll('s-slideshow-interactive[product-flavors]'), (slideshow) => {
		slideshow.setProps({
			onChange : (slideshow) => {
				const activeSlide = slideshow.getActiveSlide();
				if (activeSlide && activeSlide.hasAttribute('product-flavors-color')) {
					const color = activeSlide.getAttribute('product-flavors-color');
					slideshow.querySelector('[product-flavors-bkg]').style.color = color;
				}
			}
		});
	});
});

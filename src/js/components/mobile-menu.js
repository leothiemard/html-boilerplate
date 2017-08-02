window.addEventListener('WebComponentsReady', () => {
	const hamburgerElm = document.querySelector('label[for="mobile-menu"].hamburger');
	const mobileInputToggleElm = document.querySelector('input[type="checkbox"][name="mobile-menu"]');
	if (mobileInputToggleElm) {
		mobileInputToggleElm.addEventListener('change', (e) => {
			if (e.target.checked) {
				hamburgerElm.classList.add('is-active');
			} else {
				hamburgerElm.classList.remove('is-active');
			}
		});
	}
});

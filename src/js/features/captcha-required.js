(() => {

	function updateCaptchaStatus() {
		const captchaElms = document.querySelectorAll('.g-recaptcha');
		[].forEach.call(captchaElms, (captchaElm) => {
			const captchaResponseElm = captchaElm.querySelector('.g-recaptcha-response');
			if (captchaResponseElm.value === '') {
				captchaElm.classList.add('invalid');
			} else {
				captchaElm.classList.remove('invalid');
			}
		});
	}

	window.captchaChecked = () => {
		updateCaptchaStatus();
	};

	[].forEach.call(document.querySelectorAll('form[captcha-required]'), (formElm) => {
		formElm.addEventListener('submit', (e) => {
			const captchaResponseElm = formElm.querySelector('.g-recaptcha-response');
			const captchaElm = formElm.querySelector('.g-recaptcha');
			if (captchaResponseElm.value === '') {
				e.preventDefault();
				e.stopPropagation();
				if (captchaElm) {
					captchaElm.classList.add('invalid');
				}
			} else {
				if (captchaElm) {
					captchaElm.classList.remove('invalid');
				}
			}
		});
	});
})();

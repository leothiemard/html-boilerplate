import __dispatchEvent from 'coffeekraken-sugar/js/dom/dispatchEvent'
import jsCookie from 'js-cookie';

if ( ! window.logic) window.logic = {};
window.logic.isAgeVerified = function() {
	return jsCookie.get('age-verification');
}

window.addEventListener('WebComponentsReady', () => {
	const ageVerificationDialog = document.querySelector('#age-verification-dialog');
	if ( ! ageVerificationDialog) {
		__dispatchEvent(document, 'logic-age-verified');
		return;
	}

	ageVerificationDialog.addEventListener('click', (e) => {
		e.stopImmediatePropagation();
	});

	// prepare the
	ageVerificationDialog.setProps({
		onOk : (value) => {
			ageVerificationDialog.style.display = 'none';
			__dispatchEvent(document, 'logic-age-verified');
			jsCookie.set('age-verification', true, {
				path : '',
				expires : 365
			});
		}
	});

	// check if the user has already clicked yes
	const hasUserAlreadySayYes = window.logic.isAgeVerified();
	if ( ! hasUserAlreadySayYes) {
		// open the dialog
		setTimeout(() => {
			ageVerificationDialog.style.display = 'block';
			ageVerificationDialog.open();
		});
	} else {
		__dispatchEvent(document, 'logic-age-verified');
	}
});

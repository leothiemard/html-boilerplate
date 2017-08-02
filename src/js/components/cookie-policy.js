import jsCookie from 'js-cookie';

if ( ! window.logic) window.logic = {};
window.logic.isCookiePolicyAccepted = function() {
	return jsCookie.get('cookie-policy');
}

window.addEventListener('WebComponentsReady', () => {
	const cookiePolicyElm = document.querySelector('#cookie-policy');
	if ( ! cookiePolicyElm) return;
	if ( ! window.logic.isCookiePolicyAccepted()) {
		cookiePolicyElm.classList.add('displayed');
	}
	const cookiePolicyBtnElm = cookiePolicyElm.querySelector('button');
	if ( ! cookiePolicyBtnElm) return;
	cookiePolicyBtnElm.addEventListener('click', (e) => {
		jsCookie.set('cookie-policy', true, {
			path : '',
			expires : 365
		});
		cookiePolicyElm.classList.remove('displayed');
	});
});

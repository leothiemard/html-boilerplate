import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import __dispatchEvent from 'coffeekraken-sugar/js/dom/dispatchEvent'
import cssua from 'cssuseragent';

// validation messages
import SValidatorComponentClass from 'coffeekraken-s-validator-component/dist/class'
if (window.logic && window.logic.validationMessages) {
	SValidatorComponentClass.setMessages(window.logic.validationMessages);
}

// google map styling
import SGoogleMapComponentClass from 'coffeekraken-s-google-map-component/dist/class'
SGoogleMapComponentClass.registerSkin('light', [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]);
SWebComponent.setDefaultProps({
	skin : 'light'
});

// init when in viewport
SWebComponent.setDefaultProps({
	mountWhen : 'isInViewport'
}, [
	// 's-select',
	's-validator',
	's-bodymovin'
]);

SWebComponent.setDefaultProps({
	mountDependencies : [function() {
		return new Promise((resolve) => {
			// if (window.logic.isAgeVerified()) resolve();
			document.addEventListener('logic-age-verified', (e) => {
				resolve();
			});
		});
	}]
}, 's-slideshow-interactive');

// google map
SWebComponent.setDefaultProps({
	apiKey : (window.logic && window.logic.googleApiKey) ? window.logic.googleApiKey : 'AIzaSyCaM9c5Do5O37TDIaKb8CWpUaIYTOWODQE'
}, [
	's-google-map',
	's-google-map-marker',
	's-google-map-info-window'
]);
SWebComponent.setDefaultProps({
	scrollwheel : false,
	libraries : ['places']
}, 's-google-map');

SWebComponent.setDefaultProps({
	screenMarginTop : 130,
	mountDependencies : [function() {
		return new Promise((resolve) => {
			if ('ontouchstart' in window) return;
			resolve();
		});
	}]
}, 's-select');

SWebComponent.setDefaultProps({
	afterActivate : () => {
		setTimeout(() => {
			__dispatchEvent(document, 'scroll');
		}, 500);
	},
	trigger : ('ontouchstart' in window) ? 'touchend' : 'click'
}, 's-activate');

// Validator
SWebComponent.setDefaultProps({
	on : 'keyup'
}, 's-validator');

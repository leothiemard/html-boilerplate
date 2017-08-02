import __scrollTo from 'coffeekraken-sugar/js/dom/scrollTo';
import __whenAttribute from 'coffeekraken-sugar/js/dom/whenAttribute';
import __objectToQueryString from 'coffeekraken-sugar/js/utils/objects/objectToQueryString';
import __queryStringToObject from 'coffeekraken-sugar/js/utils/string/queryStringToObject';

(() => {
	// get and check if we have the store-locator in the page
	const storeLocatorElm = document.querySelector('[store-locator]');
	if ( ! storeLocatorElm) return;

	// grab the form elements
	const formElm = storeLocatorElm.querySelector('form');
	const addressInputElm = storeLocatorElm.querySelector('input[name="address"]');
	const latInputElm = storeLocatorElm.querySelector('input[name="lat"]');
	const lngInputElm = storeLocatorElm.querySelector('input[name="lng"]');

	// is search displayed
	function isSearchDisplayed() {
		return ! storeLocatorElm.querySelector('#store-locator-search').classList.contains('active');
	}

	// close all infoWindow
	function closeAllInfoWindow() {
		[].forEach.call(storeLocatorElm.querySelectorAll('s-google-map-info-window'), (infoWindowElm) => {
			infoWindowElm.close();
		})
	}

	// prevent from submiting the form if we are currently selector an address in google autocomplete
	formElm.addEventListener('submit', (e) => {
		console.log(document.activeElement);
		if (document.activeElement === addressInputElm) {
			e.preventDefault();
		}
	});

	// grab elements inside the page
	const mapElm = storeLocatorElm.querySelector('s-google-map');

	// input
	if (addressInputElm) {
		mapElm.addEventListener('ready', (e) => {
			const autocomplete = new mapElm.google.maps.places.Autocomplete(addressInputElm);
			autocomplete.addListener('place_changed', () => {
				const place = autocomplete.getPlace();
				const qs = {};
				if (place) {
					if (place.geometry && place.geometry.location) {
						latInputElm.value = place.geometry.location.lat();
						lngInputElm.value = place.geometry.location.lng();
					}
				}
				// send the form
				setTimeout(() => {
					formElm.submit();
				});
			});
			setTimeout(() => {
				if (mapElm.markers.length) {
					mapElm.fitToMarkers();
				}
				if (mapElm.markers.length <= 1) {
					mapElm.map.setZoom(12);
				}
				if (window.innerWidth > 641) {
					mapElm.map.setZoom(mapElm.map.getZoom() - 1);
					if (isSearchDisplayed()) {
						mapElm.map.panBy(-180, 50);
					} else {
						mapElm.map.panBy(0, 50);
					}
				} else {
					mapElm.map.panBy(0, -50);
				}
			}, 1000);
		});
	}

	// grab the get direction buttons
	const storeDetailsBtnElms = storeLocatorElm.querySelectorAll('[store-locator-store-details]');
	// init click in table
	[].forEach.call(storeDetailsBtnElms, (storeDetailsBtnElm) => {
		[].forEach.call(storeDetailsBtnElm.querySelectorAll('a'), (anchorElm) => {
			anchorElm.addEventListener('click', (e) => {
				e.stopPropagation();
			});
		});
		storeDetailsBtnElm.addEventListener('click', (e) => {
			// prevent default
			e.preventDefault();
			// store id
			const storeId = e.currentTarget.getAttribute('store-locator-store-details');
			// activate the good infoWindow
			const infoWindowElm = storeLocatorElm.querySelector(`[store-locator-info-window="${storeId}"]`);
			if (infoWindowElm) {
				// close all info window
				closeAllInfoWindow();
				// scroll to top
				__scrollTo(document.body, 200);
				// wait scroll time to open new window
				setTimeout(() => {
					infoWindowElm.open();
					mapElm.map.setCenter({
						lat : infoWindowElm.infoWindow.position.lat(),
						lng : infoWindowElm.infoWindow.position.lng()
					});
					mapElm.map.setZoom(12);
					setTimeout(() => {
						if (window.innerWidth > 641 && isSearchDisplayed()) {
							mapElm.map.panBy(-180, -100);
						}
					});
				}, 200);
			}
		});
	});

	// geolocation
	const geolocationBtnElm = storeLocatorElm.querySelector('[store-locator-geolocation]');
	if (geolocationBtnElm) {
		geolocationBtnElm.addEventListener('click', (e) => {
			e.preventDefault();
			geolocationBtnElm.classList.add('loading');
			 navigator.geolocation.getCurrentPosition((position) => {
			 	geolocationBtnElm.classList.remove('loading');
			 	if (position && position.coords) {
			 		latInputElm.value = position.coords.latitude;
					lngInputElm.value = position.coords.longitude;
					addressInputElm.value = '';
					formElm.submit();
			 	}
			 });
		});
	}

	// zoom
	const zoomInElm = storeLocatorElm.querySelector('[store-locator-zoom-in]'),
		  zoomOutElm = storeLocatorElm.querySelector('[store-locator-zoom-out]');
	if (zoomInElm) {
		zoomInElm.addEventListener('click', (e) => {
			mapElm.map.setZoom(mapElm.map.getZoom() + 1);
		});
	}
	if (zoomOutElm) {
		zoomOutElm.addEventListener('click', (e) => {
			mapElm.map.setZoom(mapElm.map.getZoom() - 1);
		});
	}

})();

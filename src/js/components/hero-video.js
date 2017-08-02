import __isVisible from 'coffeekraken-sugar/js/dom/isVisible';

(() => {

	function setToggleMuteClasses(muted, toggleMuteElm) {
		if (muted) {
			toggleMuteElm.classList.remove('icon-volume-up');
			toggleMuteElm.classList.add('icon-volume-down');
		} else {
			toggleMuteElm.classList.add('icon-volume-up');
			toggleMuteElm.classList.remove('icon-volume-down');
		}
	}

	[].forEach.call(document.querySelectorAll('toggle-mute'), (toggleMuteElm) => {
		const videoElm = document.querySelector(toggleMuteElm.getAttribute('for'));
		if ( ! videoElm) return;
		toggleMuteElm.addEventListener('click', (e) => {
			e.preventDefault();
			videoElm.muted = ! videoElm.muted;
			setToggleMuteClasses(videoElm.muted, toggleMuteElm);
		});
		setToggleMuteClasses(videoElm.muted, toggleMuteElm);
	})
})();

// home hero video
document.addEventListener('logic-age-verified', (e) => {
	const homeHeroVideoElm = document.querySelector('#home-hero-video');
	if ( ! homeHeroVideoElm) return;
	if ( ! __isVisible(homeHeroVideoElm)) return;
	homeHeroVideoElm.play();
});

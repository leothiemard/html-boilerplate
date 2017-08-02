import __throttle from 'coffeekraken-sugar/js/utils/functions/throttle';
import __scrollTop from 'coffeekraken-sugar/js/dom/scrollTop';

let oldY = __scrollTop();

const onScroll = __throttle((e) => {

	const scrollTop = __scrollTop();

	if (Math.abs(scrollTop - oldY) < 50) return;

	if (scrollTop > oldY) {
		if ( ! document.body.classList.contains('scroll-down')) {
			document.body.classList.add('scroll-down');
		}
		if (document.body.classList.contains('scroll-up')) {
			document.body.classList.remove('scroll-up');
		}
	} else {
		if ( ! document.body.classList.contains('scroll-up')) {
			document.body.classList.add('scroll-up');
		}
		if (document.body.classList.contains('scroll-down')) {
			document.body.classList.remove('scroll-down');
		}
	}
	oldY = scrollTop;
}, 100);

document.addEventListener('scroll', onScroll);

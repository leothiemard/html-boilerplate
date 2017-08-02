const searchInput = document.querySelector('input[name="search"]');
const searchActivateComponent = document.querySelector('a[is="s-activate"][href="#search"]');
searchInput.addEventListener('blur', (e) => {
	if ( ! searchActivateComponent) return;
	if (searchActivateComponent.isActive()) {
		searchActivateComponent.unactivate();
	}
});
if (searchActivateComponent) {
	searchActivateComponent.addEventListener('click', (e) => {
		searchInput && searchInput.focus();
	});
}
document.body.addEventListener('keyup', (e) => {
	if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

	// close
	if (e.keyCode === 27 && searchActivateComponent && searchActivateComponent.isActive()) {
		searchInput.blur();
		searchInput.value = '';
		searchActivateComponent.unactivate();
		return;
	}
});

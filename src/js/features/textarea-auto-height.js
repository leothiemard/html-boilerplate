(() => {
	function setTextareaHeight(elm) {
		elm.style.height = '1px';
		elm.style.height = elm.scrollHeight + 2 + 'px';
	}

	[].forEach.call(document.querySelectorAll('textarea[auto-height]'), (textareaElm) => {
		textareaElm.addEventListener('keydown', (e) => {
			const elm = e.currentTarget;
			setTimeout(() => {
				setTextareaHeight(elm);
			});
		});
		setTextareaHeight(textareaElm);
	});
})();

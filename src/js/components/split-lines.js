(() => {

	function splitElm(elm) {
		let string = elm._splitLinesOriginalString;
		if ( ! string) {
			string = elm.innerHTML;
			elm._splitLinesOriginalString = string;
		}

		const splited = string.split(' ');
		elm.innerHTML = splited.map((str) => {
			return `<span>${str}</span>`;
		}).join(' ');

		const spans = elm.querySelectorAll('span');
		let top = null;
		const lines = [];
		let line = [];
		[].forEach.call(spans, (spanElm) => {
			const spanTop = spanElm.getBoundingClientRect().top;
			if (top && spanTop !== top) {
				lines.push(line.join(' '));
				line = [];
			}
			line.push(spanElm.innerHTML.trim());
			top = spanTop;
		});
		lines.push(line.join(' '));

		elm.innerHTML = lines.map((lineStr) => {
			return `<p>${lineStr}</p>`;
		}).join('');
	}

	[].forEach.call(document.querySelectorAll('[split-lines]'), (elm) => {
		splitElm(elm);
	});

	window.addEventListener('resize', (e) => {
		[].forEach.call(document.querySelectorAll('[split-lines]'), (elm) => {
			splitElm(elm);
		});
	});

})();

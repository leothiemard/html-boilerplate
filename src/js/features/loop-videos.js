[].forEach.call(document.querySelectorAll('video[loop]'), (videoElm) => {
	videoElm.loop = true;
});

const penthouse = require('penthouse');
const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');
const _pluck = require('lodash.pluck');
require('events').EventEmitter.defaultMaxListeners = 100;

var program = require('commander');
program
  .version('1.0.0')
  .option('-o, --output [value]', 'Output critical css file', 'dist/css/critical.css')
  .option('-c, --css [value]', 'Css file to use to generate critical one', 'dist/css/style.css')
  .option('-p, --pages <items>', 'List of pages urls to process', null)
  .option('-h, --host [value]', 'Hostname on which to make pages requests', 'http://localhost:8080')
  .option('-w --width <n>', 'Width of the viewport to calculate the critical css', 1200)
  .option('-h --height <n>', 'Height of the viewport to calculate the critical css', 900)
  .parse(process.argv);


let pages = [];
if (program.pages) {
	pages = program.pages.toString().split(' ');
} else {
	if (fs.existsSync('pages.json')) {
		const pagesObj = require(path.resolve('pages.json'));
		pages = _pluck(pagesObj, 'url');
	} else if (fs.existsSync('package.json')) {
		const packageJson = require('../package.json');
		if (packageJson.pages) {
			pages = _pluck(packageJson.pages, 'url');
		}
	}
}

// variables
const criticalsCss = [];
const criticalsPromise = [];

// loop on each pages
pages.forEach((url) => {
	// add each penthouse instruction into a promise array
	// to listen for the resolution of all of them
	criticalsPromise.push(penthouse({
		base: '/',
		css: require('path').resolve(program.css),
		url: `${program.host}${url}`,
		width: program.width,
		height: program.height,
		propertiesToRemove: [
			'font-family'
		]
	}).then(function (output) {
		criticalsCss.push(output);
	}).catch(function (error) {
		console.log('error', error);
	}));
});

Promise.all(criticalsPromise).then(() => {
	// use clean css to merge all the pages css
	const cleanCss = new CleanCSS({
		level: {
			2: {
				removeUnusedAtRules : true,
				removeDuplicates : true
			}
		}
	});
	const result = cleanCss.minify(criticalsCss.join(' ')).styles;
	fs.writeFileSync(path.resolve(program.output), result);
});


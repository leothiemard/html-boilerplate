![Coffeekraken HTML Boilerplate](.resources/doc-header.jpg)

# Coffeekraken HTML Boilerplate <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<a href="https://travis-ci.org/coffeekraken/html-boilerplate">
		<img src="https://img.shields.io/travis/coffeekraken/html-boilerplate.svg?style=flat-square" />
	</a>
	<!-- <a href="https://www.npmjs.com/package/{package-name}">
		<img src="https://img.shields.io/npm/v/{package-name}.svg?style=flat-square" />
	</a> -->
	<!-- <a href="https://github.com/coffeekraken/html-boilerplate/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/{package-name}.svg?style=flat-square" />
	</a> -->
	<!-- <a href="https://github.com/coffeekraken/html-boilerplate">
		<img src="https://img.shields.io/npm/dt/{package-name}.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/html-boilerplate">
		<img src="https://img.shields.io/github/forks/coffeekraken/html-boilerplate.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/html-boilerplate">
		<img src="https://img.shields.io/github/stars/coffeekraken/html-boilerplate.svg?style=social&label=Star&style=flat-square" />
	</a>-->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="https://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=https://coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

Base HTML files and folder structure with complete build process (js, sass, image compression, etc...) built in

## Features

- Complete build process
	- Javascript files compiling (ES6, etc...)
	- CSS files compiling (SASS, SCSS)
	- Images compression
	- Icons font generation from svg files
	- Auto-build through files monitoring
	- Nice notifications feedback on build completion
	- Built in favicons generator
- [Livereload](https://www.npmjs.com/package/livereload) built in
- [Browsersync](https://browsersync.io/) built in
- PHP development server built in
- Docker container configuration built in
- Base `.htaccess` file (shamefully taken from [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate))
- Automatic changelog generation through git-changelog
- [Coffeekraken carpenter](https://github.com/coffeekraken/carpenter) integrated
- [CSSUA](http://cssuseragent.org/) built in
- [Babel polyfill](https://www.npmjs.com/package/babel-polyfill) built in
- [Coffeekraken sugar](https://github.com/coffeekraken/sugar) integrated
- [Coffeekraken gridle](https://github.com/coffeekraken/gridle) integrated

## Table of content

1. **[Go to website](https://coffeekraken.io)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Scripts](#readme-scripts)
5. [Browsers support](#readme-browsers-support)
6. [Contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md)
7. [Who are Coffeekraken?](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)
8. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
yarn install
composer install
```

> If needed, install [yarn](https://yarnpkg.com/lang/en/docs/install/) and [composer](https://getcomposer.org/doc/00-intro.md#globally).

<a name="readme-get-started"></a>
## Get Started

Run this command to start working as quickly as possible

```
yarn start
```

<a name="readme-scripts"></a>
## Scripts

- ```yarn run dist``` : Build the distribution
- ```yarn run dist:js``` : Build the js distribution
- ```yarn run dist:css``` : Build the css distribution
- ```yarn run dist:img``` : Compress the images and copy them into distribution
- ```yarn run dist:fonts``` : Build the fonts distribution
- ```yarn run dist:icons``` : Build the icons font
- ```yarn run dist:favicons``` : Generate all the favicons from a single image file with all the files like `manifest.json`, etc... for mobile phones
- ```yarn run dist:criticalcss``` : Generate the `dist/css/critical.css` file from depending on the `pages.json` defined pages
- ```yarn run dist:prod``` : Build the production version of the distribution
- ```yarn run dist:prod:js```: Build the production version of the js distribution
- ```yarn run dist:prod:css```: Build the production version of the css distribution¨
- ```yarn run data``` : Process the files located in the `data-src` folder to the `data` folder
- ```yarn run data:img``` : Minify the images of the `data-src` folder to the `data` folder
- ```yarn run data:img:placeholder``` : Create a `.placeholder.{ext}` file by image that represent a mini version of the original one
- ```yarn run carpenter``` : Start the carpenter interface
- ```yarn run livereload``` : Start the livereload server and monitor the `dist/js/app.js` and `dist/css/style.css` files
- ```yarn run browsersync``` : Start the browsersync service on port `8181`
- ```yarn start``` : Build/monitor src files using coffeekraken-scripts-stack, start the http server as well as the livereload one
- ```yarn run server``` : Start the http (PHP) server accessible on port `8080`
- ```yarn run test``` : Run the tests
- ```yarn run changelog``` : Build the changelog from the git commits ([see here](https://www.npmjs.com/package/git-changelog) for more documentation) 

<a name="readme-browsers-support"></a>
## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| --------- | --------- | --------- | --------- |
| IE11+ | last 2 versions| last 2 versions| last 2 versions

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

<a name="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt).

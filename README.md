# {project-name} <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<a href="https://travis-ci.org/{repository-path}">
		<img src="https://img.shields.io/travis/{repository-path}.svg?style=flat-square" />
	</a>
	<a href="https://www.npmjs.com/package/{package-name}">
		<img src="https://img.shields.io/npm/v/{package-name}.svg?style=flat-square" />
	</a>
	<a href="https://github.com/{repository-path}/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/{package-name}.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/{repository-path}">
		<img src="https://img.shields.io/npm/dt/{package-name}.svg?style=flat-square" />
	</a>
	<a href="https://github.com/{repository-path}">
		<img src="https://img.shields.io/github/forks/{repository-path}.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/{repository-path}">
		<img src="https://img.shields.io/github/stars/{repository-path}.svg?style=social&label=Star&style=flat-square" />
	</a>-->
	<a href="https://twitter.com/{twitter-username}">
		<img src="https://img.shields.io/twitter/url/http/{twitter-username}.svg?style=social&style=flat-square" />
	</a>
	<a href="http://{website-url}">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label={website-url}&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

{project-description}

## Features

{project-features}

## Table of content

1. **[Go to website](http://{website-url})**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Scripts](#readme-scripts)
5. [Browsers support](#readme-browsers-support)
6. [Contribute](#readme-contribute)
7. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
8. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install
```

<a name="readme-get-started"></a>
## Get Started

Run this command to start working as quickly as possible

```
npm start
```

<a name="readme-scripts"></a>
## Scripts

- ```npm run dist``` : Build the distribution
- ```npm run dist.js``` : Build the js distribution
- ```npm run dist.css``` : Build the css distribution
- ```npm run dist.img``` : Compress the images and copy them into distribution
- ```npm run dist.fonts``` : Build the fonts distribution
- ```npm run dist.prod``` : Build the production version of the distribution
- ```npm run dist.prod.js```: Build the production version of the js distribution
- ```npm run dist.prod.css```: Build the production version of the css distribution
- ```npm run dist.watch``` : Build and monitor the src files
- ```npm run dist.watch.js``` : Build and monitor the js src files
- ```npm run dist.watch.css``` : Build and monitor the css src files
- ```npm run dist.watch.img``` : Compress and monitor the images src files
- ```npm run dist.watch.fonts``` : Compress and monitor the fonts src files
- ```npm run start``` : Build/monitor src files and start the http server
- ```npm run carpenter``` : Start the carpenter interface
- ```npm run server``` : Start the http server
- ```npm run test``` : Run the tests

## Browser support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE11+ | last 2 versions| last 2 versions| last 2 versions

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

## License

The code is available under the [MIT license](LICENSE.txt).

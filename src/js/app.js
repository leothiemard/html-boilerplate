// import some dependencies like polyfills, etc...
// require('@webcomponents/webcomponentsjs');
// require('@webcomponents/webcomponentsjs/custom-elements-es5-adapter');
require("babel-polyfill");
require('webcomponents.js/webcomponents-lite');
import cssua from 'cssuseragent';
require('fastclick');

// main application entry point
require('./webcomponent-import');
require('./webcomponent-props');
require('./main');

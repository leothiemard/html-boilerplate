const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: {
		'dist/js/app.js' : './src/js/app.js'
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name]',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			use: 'babel-loader'
		}]
	},
	plugins: [
		new webpack.IgnorePlugin(/vertx/)
	]
}

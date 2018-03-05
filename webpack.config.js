const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: {
		'dist/js/app.js' : './src/js/app.js',
		'dist/js/template-stack.js': './src/js/template-stack.js'
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name]',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			use: [{
				loader: 'babel-loader',
				query: {
					compact: false
				}
			}]
		}]
	},
	plugins: [
		new webpack.IgnorePlugin(/vertx/)
	]
}

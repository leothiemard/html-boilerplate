module.exports = {
	entry: {
		'dist/js/app.js' : './src/js/app.js'
	},
	output: {
		path: '.',
		filename: '[name]',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			use: 'babel-loader'
		}]
	}
}

var gulp = require('gulp'),
	connect = require('gulp-connect-php'),
	iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css');

var runTimestamp = Math.round(Date.now()/1000);

/**
* Server
*/
gulp.task('server-connect', function() {
	connect.server({
		port: 8080,
		base: '.',
		rooter : 'index.php'
	});
});
gulp.task('server', ['server-connect']);

/**
 * Icons
 */
gulp.task('icons', function(){
	return gulp.src(['src/icons/*.svg'])
	.pipe(iconfontCss({
		fontName: 'fonticons',
		path: __dirname + '/src/sass/03_generic/_fonticons.tpl.scss',
		targetPath: '../../../src/sass/03_generic/_fonticons.scss',
		fontPath: '../fonts/fonticons/'
	}))
	.pipe(iconfont({
		fontName: 'fonticons', // required
		formats: ['eot','otf','woff','woff2'], // default, 'woff2' and 'svg' are available
		prependUnicode: true, // recommended option
		timestamp: runTimestamp // recommended to get consistent builds when watching files
	}))
	.pipe(gulp.dest('dist/fonts/fonticons'));
});

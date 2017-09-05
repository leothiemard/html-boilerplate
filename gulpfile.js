var gulp = require('gulp'),
connect = require('gulp-connect-php');

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
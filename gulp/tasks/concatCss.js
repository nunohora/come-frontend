var gulp      = require('gulp'),
	concatCss = require('gulp-concat-css'),
	config 	  = require('../config').concatCss;

gulp.task('concat-css', ['less'], function () {
  gulp.src(config.src)
    .pipe(concatCss(config.bundleName))
    .pipe(gulp.dest(config.dest));
});

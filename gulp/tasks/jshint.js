var gulp    = require('gulp'),
	jshint  = require('gulp-jshint'),
	config  = require('../config').jshint,
	stylish = require('jshint-stylish');

//JSHint
gulp.task('jshint', ['jsx-compile'], function () {
	return gulp.src(config.src)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});
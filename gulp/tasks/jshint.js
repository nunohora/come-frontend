var gulp    = require('gulp'),
	jshint  = require('gulp-jshint'),
	jsxhint = require('jshint-jsx').JSXHINT,
	config  = require('../config').jshint,
	stylish = require('jshint-stylish');

//JSHint
gulp.task('jshint', ['clean', 'browserify'], function () {
	return gulp.src(config.src)
		.pipe(jshint({ linter: jsxhint }))
		.pipe(jshint.reporter(stylish));
});
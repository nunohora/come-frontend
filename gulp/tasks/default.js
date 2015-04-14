var gulp = require('gulp'),
	app  = require('../../app');

/// Gulp tasks
gulp.task('default', ['jshint', 'less', 'iconFont', 'images', 'watch']);
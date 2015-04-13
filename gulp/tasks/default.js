var gulp = require('gulp'),
	app  = require('../../app');

/// Gulp tasks
gulp.task('default', ['jshint', 'concat-css', 'iconFont', 'images', 'watch']);
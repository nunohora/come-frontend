#!/usr/bin/env node
var gulp    = require('gulp'),
	debug   = require('debug')('frontend'),
	react   = require('gulp-react'),
	jshint  = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	app     = require('./app');

var paths = {
	jsx: {
		src: './public/src/js/**/*.jsx',
		dest: './public/build/js'
	},
	jshint: {
		src: './public/build/**/*.js'
	}
};

/// Gulp tasks
gulp.task('default', ['build'], function () {
	var server;

	//Start server
	server = app.listen(app.get('port'), function() {
	  debug('Express server listening on port ' + server.address().port);
	});
});

//Compile jsx templates to js
gulp.task('jsx-compile', function () {
	return gulp.src(paths.jsx.src)
		.pipe(react())
		.pipe(gulp.dest(paths.jsx.dest));
});

//JSHint
gulp.task('jshint', ['jsx-compile'], function () {
	return gulp.src(paths.jshint.src)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

//Main build task
gulp.task('build', ['jshint']);

//watching changes of files
var watcher = gulp.watch(paths.jsx.src, ['build']);
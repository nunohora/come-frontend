#!/usr/bin/env node
var gulp    = require('gulp'),
	debug   = require('debug')('frontend'),
	react   = require('gulp-react'),
	less    = require('gulp-less'),
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
	},
	less: {
		src: './public/src/css/style.less',
		dest: './public/build/css'
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

//LESS to CSS
gulp.task('less', function () {
	return gulp.src(paths.less.src)
		.pipe(less())
		.pipe(gulp.dest(paths.less.dest));
});

//Main build task
gulp.task('build', ['jshint', 'less']);

//
// WATCHERS
//

//watching changes of files
gulp.watch(paths.jsx.src, ['build']);

//Compile LESS to CSS
gulp.watch(paths.less.src, ['less']);
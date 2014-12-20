#!/usr/bin/env node
var gulp           = require('gulp'),
	debug          = require('debug')('frontend'),
	react          = require('gulp-react'),
	less     	   = require('gulp-less'),
	cleanCssPlugin = require('less-plugin-clean-css'),
	jshint         = require('gulp-jshint'),
	clean          = require('gulp-clean'),
	concat   	   = require('gulp-concat'),
	stylish  	   = require('jshint-stylish'),
	app      	   = require('./app');

// Paths for Gulp tasks
var paths = {
	'clean-build': {
		src: './public/build'
	},
	'clean-css-tmp': {
		src: './public/src/css/tmp'
	},
	'jsx': {
		src: './public/src/js/**/*.jsx',
		dest: './public/build/js'
	},
	'jshint': {
		src: './public/build/**/*.js'
	},
	'less': {
		src: './public/src/less/*.less',
		dest: './public/src/less/tmp'
	},
	'css-concat': {
		src: './public/src/less/tmp/*.css',
		dest: './public/build/css',
		name: 'style.css'
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
gulp.task('jsx-compile', ['clean-build'], function () {
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
gulp.task('less', ['clean-build', 'clean-css-tmp'], function () {
	var cleancss = new cleanCssPlugin({
		keepBreaks: true
	});

	return gulp.src(paths.less.src)
		.pipe(less({
			plugins: [cleancss]
		}))
		.pipe(gulp.dest(paths.less.dest));
});

//Clean build folder
gulp.task('clean-build', ['clean-css-tmp'], function () {
	return gulp.src(paths['clean-build'].src, {read: false})
			.pipe(clean());
});

//Clean css tmp folder
gulp.task('clean-css-tmp', function () {
	return gulp.src(paths['clean-css-tmp'].src, {read: false})
			.pipe(clean());
});

gulp.task('css-concat', ['less'], function () {
	return gulp.src(paths['css-concat'].src)
			.pipe(concat(paths['css-concat'].name))
			.pipe(gulp.dest(paths['css-concat'].dest));
});

//Main build task
gulp.task('build', ['jshint', 'css-concat']);

//
// WATCHERS
//

//watching changes of files
gulp.watch(paths.jsx.src, ['build']);

//Compile LESS to CSS
gulp.watch(paths.less.src, ['build']);
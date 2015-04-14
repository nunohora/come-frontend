var gulp         = require('gulp'),
	browserSync  = require('browser-sync'),
	less 		 = require('gulp-less'),
	minifyCSS    = require('gulp-minify-css'),
	concatCSS    = require('gulp-concat-css'),
	sourcemaps   = require('gulp-sourcemaps'),
	handleErrors = require('../util/handleErrors'),
	config       = require('../config');

//LESS to CSS
gulp.task('less', function () {
	return gulp.src(config.less.src)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concatCSS(config.concatCss.bundleName))
		.pipe(minifyCSS({keepBreaks:true}))
		.on('error', handleErrors)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.less.dest))
		.pipe(browserSync.reload({stream:true}));
});
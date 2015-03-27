var gulp         = require('gulp'),
	browserSync  = require('browser-sync'),
	less 		 = require('gulp-less'),
	sourcemaps   = require('gulp-sourcemaps'),
	handleErrors = require('../util/handleErrors'),
	config       = require('../config').less;

//LESS to CSS
gulp.task('less', function () {
	return gulp.src(config.src)
		.pipe(sourcemaps.init())
		.pipe(less())
		.on('error', handleErrors)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({stream:true}));
});
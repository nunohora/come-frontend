var gulp   = require('gulp'),
	react  = require('gulp-react'),
    config = require('../config').jsxCompile;

//Compile jsx templates to js
gulp.task('jsx-compile', function () {
	return gulp.src(config.src)
		.pipe(react())
		.pipe(gulp.dest(config.dest));
});
var gulp         = require('gulp'),
    jest         = require('gulp-jest-iojs'),
    browserSync  = require('browser-sync'),
    handleErrors = require('../util/handleErrors'),
    config       = require('../config');

gulp.task('test', function () {
    return gulp.src(config.test.src)
        .pipe(jest(config.test.jestConfig))
        .on('error', handleErrors)
});
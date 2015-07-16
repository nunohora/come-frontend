var gulp         = require('gulp'),
    jest         = require('gulp-jest'),
    browserSync  = require('browser-sync'),
    handleErrors = require('../util/handleErrors'),
    config       = require('../config');

//LESS to CSS
gulp.task('test', function () {
    return gulp.src(config.test.src)
        .pipe(jest(config.test.jestConfig))
        .on('error', handleErrors)
        .pipe(browserSync.reload({stream:true}));
});
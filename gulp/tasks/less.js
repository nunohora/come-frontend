const gulp = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');
const concatCSS = require('gulp-concat-css');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config');

//LESS to CSS
gulp.task('less', () => {
    return gulp.src(config.less.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concatCSS(config.concatCss.bundleName))
        .pipe(minifyCSS({ keepBreaks: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.less.dest));
});
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jsxhint = require('jshint-jsx').JSXHINT;
const config = require('../config').jshint;
const stylish = require('jshint-stylish');

//JSHint
gulp.task('jshint', () => {
    return gulp.src(config.src)
        .pipe(jshint({ linter: jsxhint }))
        .pipe(jshint.reporter(stylish));
});
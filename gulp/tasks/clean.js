const gulp = require('gulp');
const del = require('del');
const config = require('../config').clean;

gulp.task('clean', () => {
    return del(config.src);
});
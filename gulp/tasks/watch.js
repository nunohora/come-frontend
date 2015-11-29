const gulp = require('gulp');
const config = require('../config');

gulp.task('watch', () => {
    gulp.watch(config.less.src, ['less']);
    gulp.watch(config.images.src, ['images', 'less']);
});
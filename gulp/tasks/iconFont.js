const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const config = require('../config').fonts;

gulp.task('iconFont', () => {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
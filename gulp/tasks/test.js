const gulp = require('gulp');
const jest = require('gulp-jest');
const config = require('../config');

gulp.task('test', () => {
    return gulp.src(config.test.src)
        .pipe(jest(config.test.jestConfig));
});
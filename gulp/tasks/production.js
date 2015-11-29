const gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', () => {
    // This runs only if the karma __tests__ pass
    gulp.start([
        'images',
        'minifyCss',
        'uglifyJs'
    ]);
});
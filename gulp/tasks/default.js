import gulp from 'gulp';
import runSequence from 'run-sequence';

/// Gulp tasks
gulp.task('default', done => {
    runSequence([
        'clean'
    ], [
        //'jshint',
        'less',
        'iconFont',
        'images',
        'webpack:dev',
        'watch'
    ], done);
});
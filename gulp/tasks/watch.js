/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/
var gulp     = require('gulp'),
	config   = require('../config');

gulp.task('watch', ['browserSync', 'browserify'], function() {
  gulp.watch(config.less.src,   ['less']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.jsxCompile.src, ['browserify']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
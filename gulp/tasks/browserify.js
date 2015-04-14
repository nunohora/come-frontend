var browserify   = require('browserify'),
    browserSync  = require('browser-sync'),
    bundleLogger = require('../util/bundleLogger'),
    gulp         = require('gulp'),
    uglify       = require('gulp-uglify'),
    reactify     = require('reactify'),
    handleErrors = require('../util/handleErrors'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer'),
    config       = require('../config').browserify;

gulp.task('browserify', function() {
  var b = browserify(config);

  // Log when bundling starts
  bundleLogger.start(config.outputName);

  b.transform(reactify);
  b.bundle()
  // Report compile errors
  .on('error', handleErrors)
  // Use vinyl-source-stream to make the
  // stream gulp compatible. Specify the
  // desired output filename here.
  .pipe(source(config.outputName))
  // Specify the output destination
  .pipe(buffer())
  //
  // .pipe(uglify())
  //
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({
    stream: true
  }));
});
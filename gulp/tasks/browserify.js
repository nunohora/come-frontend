/* browserify task
   ---------------
   Bundle javascripty things with browserify!
   This task is set up to generate multiple separate bundles, from
   different sources, and to use Watchify when run from the default task.
   See browserify.bundleConfigs in gulp/config.js
*/

var browserify   = require('browserify'),
    browserSync  = require('browser-sync'),
    mergeStream  = require('merge-stream'),
    bundleLogger = require('../util/bundleLogger'),
    gulp         = require('gulp'),
    reactify     = require('reactify'),
    handleErrors = require('../util/handleErrors'),
    source       = require('vinyl-source-stream'),
    config       = require('../config').browserify,
    _            = require('lodash');

var browserifyTask = function(devMode) {

  var browserifyThis = function(bundleConfig) {

    var b = browserify(bundleConfig);

    var bundle = function() {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName);

      return b
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specify the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest))
        .pipe(browserSync.reload({
          stream: true
        }));
    };

    if(devMode) {
      // Wrap with watchify and rebundle on changes
      b = watchify(b);
      // Rebundle on update
      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      // Sort out shared dependencies.
      // b.require exposes modules externally
      if (bundleConfig.require) b.require(bundleConfig.require);
      // b.external excludes modules from the bundle, and expects
      // they'll be available externally
      if (bundleConfig.external) {
        b.external(bundleConfig.external);
      }
    }

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  return mergeStream.apply(gulp, _.map(config.bundleConfigs, browserifyThis));
};

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
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({
    stream: true
  }));



});

// Exporting the task so we can call it directly in our watch task, with the 'devMode' option
module.exports = browserifyTask;
var gulp 	 = require('gulp'),
	iconfont = require('gulp-iconfont'),
	config   = require('../config').fonts;

gulp.task('iconFont', function(){
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
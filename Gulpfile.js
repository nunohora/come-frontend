#!/usr/bin/env node
var gulp = require('gulp');

function startExpress () {
	var debug = require('debug')('frontend'),
		app   = require('./app');

	app.set('port', process.env.PORT || 3000);

	var server = app.listen(app.get('port'), function() {
	  debug('Express server listening on port ' + server.address().port);
	});
}

gulp.task('default', function () {
	startExpress();
});
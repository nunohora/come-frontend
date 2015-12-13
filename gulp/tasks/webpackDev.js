import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';
import _ from 'underscore';
import WebpackDevServer from 'webpack-dev-server';

const config = require('../config').webpack;

gulp.task("webpack:dev", (callback) => {
    const webpackConfig = _.extend(config.server, config.config);

    console.log(webpackConfig);

    new WebpackDevServer(webpack(webpackConfig), config.server.options).listen(config.server.port, config.server.host, (err) => {
        if (err) {
            throw new gutil.PluginError('webpack:dev', err);
        }
    });

    callback();
});

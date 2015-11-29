import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';
import _ from 'underscore';
import WebpackDevServer from 'webpack-dev-server';

const config = require('../config').webpack;

gulp.task("webpack:dev", (callback) => {
    const webpackConfig = _.extend({
        entry: config.app.src,
        output: {
            path: config.server.dest,
            filename: '[name].js'
        },
        devtool: config.server.devtool,
        debug: config.server.debug,
        plugins: config.prod.plugins
    }, config.config);

    console.log(WebpackDevServer);

    new WebpackDevServer(webpack(webpackConfig), config.server.options).listen(config.server.port, config.server.host, (err) => {
        if (err) {
            throw new gutil.PluginError('webpack:dev', err);
        }
    });

    callback();
});

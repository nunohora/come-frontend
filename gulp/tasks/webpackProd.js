import gulp from 'gulp';
import webpack from 'webpack';
import _ from 'underscore';

const config = require('../config').webpack;

gulp.task("webpack:prod", (callback) => {
    const webpackConfig = _.extend({
        entry: config.app.src,
        output: {
            path: config.app.dest,
            filename: 'app.js',
            devtool: config.server.devtool,
            debug: config.server.debug
        },
        plugins: config.prod.plugins
    }, config.config);

    console.log(webpackConfig);

    // run webpack
    webpack(webpackConfig, (err) => {
        if(err) throw new Error("webpack", err);

        callback();
    });
});

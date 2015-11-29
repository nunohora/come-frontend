const src = './src';
const dest = './build';

import webpack from 'webpack';

module.exports = {
    clean: { src: dest },

    test: {
        src: `${ src }/__tests__`,
        jestConfig: {
            unmockedModulePathPatterns: ['/node_modules/'],
            moduleFileExtensions: [
                'js',
                'jsx'
            ],
            testPathIgnorePatterns: [
                'setup.js',
                'preprocessor.js'
            ],
            setupEnvScriptFile: 'setup.js',
            scriptPreprocessor: 'preprocessor.js'
        }
    },

    less: {
        src: [
            `${ src }/less/font-awesome/font-awesome.less`,
            `${ src }/less/bootstrap/bootstrap.less`,
            `${ src }/less/*.less`
        ],
        dest: `${ dest }/css`
    },

    jshint: { src: `${ src }/js/**/*` },

    browserSync: {
        proxy: 'localhost:3000',
        browser: 'google chrome',
        port: 7000
    },

    images: {
        src: `${ src }/img/**/*`,
        dest: `${ dest }/img`
    },

    browserify: {
        entries: `${ src }/js/routes.jsx`,
        dest: `${ dest }/js`,
        outputName: 'main.js',
        paths: [`${ src }/js`],
        extensions: ['.jsx'],
        debug: true
    },

    concatCss: { bundleName: 'style.css' },

    production: {
        cssSrc: `${ dest }/css/*.css`,
        jsSrc: `${ dest }/js/*.js`,
        dest: dest
    },

    fonts: {
        src: `${ src }/fonts/**.*`,
        dest: `${ dest }/fonts`
    },

    webpack: {
        app: {
            src: `${ src }/js/routes.jsx`,
            dest: `${ dest }/js`,
            filename: 'app.js'
        },
        server: {
            dest: dest,
            devtool: 'source-map',
            debug: true,
            host: 'localhost',
            port: 8080,
            options: {
                publicPath: '/js/',
                stats: {
                    colors: true
                },
                https: true,
                inline: true,
                hot: true
            }
        },
        config: {
            cache: true,
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loaders: ['babel-loader']
                    }
                ]
            },
            plugins: [],
            resolve: {
                moduleDirectories: [
                    'src/js',
                    'src/__tests__'
                ],
                extensions: ['', '.json', '.js', '.jsx']
            }
        },
        prod: {
            plugins: [
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: true
                    }
                })
            ]
        }
    }
};
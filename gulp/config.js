import webpack from 'webpack';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const src = './src';
const dest = './build';

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
                'setup.js'
            ],
            setupEnvScriptFile: 'setup.js'
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

    images: {
        src: `${ src }/img/**/*`,
        dest: `${ dest }/img`
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
        prod: {
            plugins: [
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.UglifyJsPlugin({ compress: { warnings: true } }),
                new HtmlWebpackPlugin()
            ]
        },
        server: {
            entry: [
                'webpack-dev-server/client?https://localhost:8080', // WebpackDevServer host and port
                'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
                path.resolve(`${ src }/js/routes.jsx`)
            ],
            output: {
                path: path.resolve(`${ dest }/js/`),
                filename: 'app.js'
            },
            debug: true,
            devtool: 'source-map',
            host: 'localhost',
            port: 8080,
            options: {
                stats: {
                    colors: true
                },
                https: true,
                inline: true,
                hot: true,
                historyApiFallback: true
            },
            plugins: [
                new HotModuleReplacementPlugin(),
                new HtmlWebpackPlugin({
                template: path.resolve(`${ src }/index.html`),
                inject: true
            })]
        },
        config: {
            cache: true,
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        loaders: ['react-hot', 'babel'],
                        exclude: /(node_modules|bower_components)/
                    }

                ]
            },
            resolve: {
                moduleDirectories: [
                    'src/js',
                    'src/__tests__'
                ],
                extensions: ['', '.json', '.js', '.jsx']
            },
            node: {
                net: 'empty',
                tls: 'empty',
                dns: 'empty'
            }
        }
    }
};
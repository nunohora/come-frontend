import webpack from 'webpack'
import cssnano from 'cssnano'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../config'
import _debug from 'debug'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const {__DEV__, __PROD__, __TEST__} = config.globals

debug('Create configuration.')

const webpackConfig = {
    name: 'client',
    target: 'web',
    devtool: config.compiler_devtool,
    resolve: {
        root: paths.base(config.dir_client),
        extensions: ['', '.js', '.jsx', '.json'],
        packageAlias: 'browser'
    },
    module: {}
}
// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY_PATH = paths.base(config.dir_client) + '/main.js'

webpackConfig.entry = {
    app: __DEV__
        ? [APP_ENTRY_PATH, `webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`]
        : [APP_ENTRY_PATH],
    normalize: 'normalize-scss',
    bootstrap: 'bootstrap-loader',
    fontAwesome: 'font-awesome-sass-loader'
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
    filename: `[name].[${config.compiler_hash_type}].js`,
    path: paths.base(config.dir_dist),
    publicPath: config.compiler_public_path
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
    new webpack.DefinePlugin(config.globals),
    new HtmlWebpackPlugin({
        template: paths.client('index.html'),
        hash: false,
        favicon: paths.client('static/favicon.ico'),
        filename: 'index.html',
        inject: 'body',
        minify: {
            collapseWhitespace: true
        }
    })
]

if (__DEV__) {
    debug('Enable plugins for live development (HMR, NoErrors).')
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    )
} else if (__PROD__) {
    debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
    webpackConfig.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        })
    )
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
    webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor']
    }))
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.loaders = [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
        cacheDirectory: true,
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-0'],
        env: {
            development: {
                plugins: [
                    ['react-transform', {
                        transforms: [{
                            transform: 'react-transform-hmr',
                            imports: ['react'],
                            locals: ['module']
                        }, {
                            transform: 'react-transform-catch-errors',
                            imports: ['react', 'redbox-react']
                        }]
                    }]
                ]
            },
            production: {
                plugins: [
                    'transform-react-remove-prop-types',
                    'transform-react-constant-elements'
                ]
            }
        }
    }
}, {
    test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
    loaders: [
        'transform-loader/cacheable?brfs',
        'transform-loader/cacheable?packageify'
    ]
}, {
    test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
    loader: 'transform-loader/cacheable?ejsify'
}, {
    test: /\.json$/,
    loader: 'json'
}]

// ------------------------------------
// Style Loaders
// ------------------------------------
// We use cssnano with the postcss loader, so we tell
// css-loader not to duplicate minimization.
const BASE_CSS_LOADER = 'css?sourceMap&-minimize'

// Add any packge names here whose styles need to be treated as CSS modules.
// These paths will be combined into a single regex.
const PATHS_TO_TREAT_AS_CSS_MODULES = [
    // 'react-toolbox', (example)
]

// If config has CSS modules enabled, treat this project's styles as CSS modules.
if (config.compiler_css_modules) {
    PATHS_TO_TREAT_AS_CSS_MODULES.push(
        paths.base(config.dir_client).replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&')
    )
}

const isUsingCSSModules = !!PATHS_TO_TREAT_AS_CSS_MODULES.length
const cssModulesRegex = new RegExp(`(${PATHS_TO_TREAT_AS_CSS_MODULES.join('|')})`)

// Loaders for styles that need to be treated as CSS modules.
if (isUsingCSSModules) {
    const cssModulesLoader = [
        BASE_CSS_LOADER,
        'modules',
        'importLoaders=1',
        'localIdentName=[name]__[local]___[hash:base64:5]'
    ].join('&')

    webpackConfig.module.loaders.push({
        test: /\.scss$/,
        include: cssModulesRegex,
        loaders: [
            'style',
            cssModulesLoader,
            'postcss',
            'sass?sourceMap'
        ]
    })
}

// Loaders for files that should not be treated as CSS modules.
const excludeCSSModules = isUsingCSSModules ? cssModulesRegex : false
webpackConfig.module.loaders.push({
    test: /\.scss$/,
    exclude: excludeCSSModules,
    loaders: [
        'style',
        BASE_CSS_LOADER,
        'postcss',
        'sass?sourceMap'
    ]
})
webpackConfig.module.loaders.push({
    test: /\.css$/,
    exclude: excludeCSSModules,
    loaders: [
        'style',
        BASE_CSS_LOADER,
        'postcss'
    ]
})

// ------------------------------------
// Style Configuration
// ------------------------------------
webpackConfig.sassLoader = {
    includePaths: paths.client('styles')
}

webpackConfig.postcss = [
    cssnano({
        autoprefixer: {
            add: true,
            remove: true,
            browsers: ['last 2 versions']
        },
        discardComments: {
            removeAll: true
        },
        discardUnused: false,
        mergeIdents: false,
        reduceIdents: false,
        safe: true,
        sourcemap: true
    })
]

// File loaders
/* eslint-disable */
webpackConfig.module.loaders.push(
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
)
/* eslint-enable */

// ------------------------------------
// Finalize Configuration
// ------------------------------------
// when we don't know the public path (we know it only when HMR is enabled [in development]) we
// need to use the extractTextPlugin to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
    debug('Apply ExtractTextPlugin to CSS loaders.')
    webpackConfig.module.loaders.filter((loader) =>
        loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
    ).forEach((loader) => {
        const [first, ...rest] = loader.loaders
        loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
        delete loader.loaders
    })

    webpackConfig.plugins.push(
        new ExtractTextPlugin('[name].[contenthash].css', {
            allChunks: true
        })
    )
}

//Necessary for Joi form validation
webpackConfig.node = {
    net: 'empty',
    dns: 'empty'
}
webpackConfig.browser = {
    joi: 'joi-browser'
}

export default webpackConfig

import webpackdevmiddleware from 'webpack-dev-middleware'
import applyexpressmiddleware from '../lib/apply-express-middleware'
import _debug from 'debug'
import config from '../../config'

const paths = config.utils_paths
const debug = _debug('app:server:webpack-dev')

export default function (compiler, publicpath) {
    debug('enable webpack dev middleware.')

    const middleware = webpackdevmiddleware(compiler, {
        publicpath,
        contentbase: paths.base(config.dir_client),
        hot: true,
        quiet: config.compiler_quiet,
        noinfo: config.compiler_quiet,
        lazy: false,
        stats: config.compiler_stats
    })

    return async function koawebpackdevmiddleware (ctx, next) {
        let hasnext = await applyexpressmiddleware(middleware, ctx.req, {
            end: (content) => (ctx.body = content),
            setHeader: function () {
                ctx.set.apply(ctx, arguments)
            }
        })

        if (hasnext) {
            await next()
        }
    }
}

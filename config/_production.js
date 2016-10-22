/* eslint key-spacing:0 */
export default (config) => ({
  compiler_fail_on_warning : true,
  compiler_hash_type       : 'chunkhash',
  compiler_devtool         : null,
  compiler_stats           : {
    chunks : true,
    chunkModules : true,
    colors : true
  }
})

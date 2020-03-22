const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    mode: 'development', //production
    devServer: {
        // contentBase: path.resolve('./'),
        open: true,
        hot: true,
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map'
})

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    mode: 'production', //production
    // devtool: 'cheap-module-source-map'
})

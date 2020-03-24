const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
    mode: 'production', //production
    optimization: { // 这个配置项会把默认的js压缩项给取消掉，所以要配置js压缩
    	minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    // devtool: 'cheap-module-source-map',
    plugins: [
    	new webpack.DefinePlugin({
    		IS_DEV: 'false',
    		test: '2 + 5',
    		test2: '"world"'
    	})
    ]
})

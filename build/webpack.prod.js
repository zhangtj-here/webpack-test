const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    mode: 'production', //production
    devtool: 'cheap-module-source-map',
    plugins: [
    	new webpack.DefinePlugin({
    		IS_DEV: 'false',
    		test: '2 + 5',
    		test2: '"world"'
    	})
    ]
})

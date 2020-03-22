const webpack =  require('webpack')
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
    devtool: 'cheap-module-eval-source-map',
    plugins: [
    	new webpack.DefinePlugin({
    		IS_DEV: 'true', //类似于eval,引号里面是js表达式，会解析
    		test: '1 + 1',
    		test2: '"hello"'
    	})
    ]
})

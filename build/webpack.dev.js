const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    mode: 'development', //production
    devServer: {
        // contentBase: path.resolve('./'),
        open: true,
        hot: true, // 开启了热更新 
        port: 3000,
        proxy: {
        	// 当前端请求 /api 地址时，会将请求转发到http://localhost:8080/api
        	// '/api': 'http://localhost:8080'
        	'/api': {
        		target: 'http://localhost:8080',
        		// 转发请求是不会携带 /api
        		pathRewrite: {
        			// '^/api': '',
        			// '/api': '',
        			// '^/to': '/toto'
        		}
        	},
        	'/to': {
        		target: 'http://localhost:8080',
        		// 转发请求是不会携带 /api
        		pathRewrite: {
        			'^/to': '/toto'
        		}
        	}

        }
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

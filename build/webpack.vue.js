// 这个webpack就是用来打包vue全家桶的
const path = require('path')

// DllPlugin
const webpack = require('webpack') 

module.exports = {
	mode: 'development',
	entry: {
		vue: [
			'vue/dist/vue.js', // 如果不写全，默认采用的vue.esm.js  
			'vue-router'
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]_dll.js'
	},
	plugins: [
		new webpack.DllPlugin({
				name: '[name]_dll.js',
				path: path.resolve(__dirname, '../dist/mainfest.json')
		})
	]
}
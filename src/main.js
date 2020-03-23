/*console.log('this is main.js')

// import $ from 'jquery'

$('body').css('background', 'red')
console.log($, jQuery)
// console.log(window.$)

import {getUserInfo} from './api/http.js'
getUserInfo().then((result) => {console.log(result)},(error) => {
	console.log(error)
})

console.log(test,test2,IS_DEV)*/

import str from './hotModule.js' 
console.log(str)
if (module.hot) {
	module.hot.accept('./hotModule.js', function() {
		// 当hotModule模块内容被更新时触发
		var hotModule = require('./hotModule.js')
		console.log(hotModule)
		console.log('hotModule被更新了')
	})
}
// import Vue from 'vue'  // runtime-only 的vue包
import Vue from 'vue/dist/vue.js' //完整版的vue
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const homeComponent = {
	template: "<h2>我是home页面</h2>"
}

const newsComponent = {
	template: "<h2>我是news页面</h2>"
}


const router = new VueRouter({
	routers: [
		{
			path: '/home',
			component: homeComponent
		},
		{
			path: '/news',
			component: newsComponent 
		}
	]
})
	
new Vue({
	el: '#app',
	data: {
		msg: 'hello world'
	},
	router
})





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

// import str from './hotModule.js' 
// console.log(str)
// if (module.hot) {
// 	module.hot.accept('./hotModule.js', function() {
// 		// 当hotModule模块内容被更新时触发
// 		var hotModule = require('./hotModule.js')
// 		console.log(hotModule)
// 		console.log('hotModule被更新了')
// 	})
// }

// let math = require('./math.js') // 动态导入，可以在块级作用域中导入

// console.log(math);
// import {add} from './math.js' // 只能在顶级作用域中导入
// console.log(add(1, 2))

// let a = 1
// let b = 2
// let c = 3
// console.log(a + b + c)
// console.log(a, b, c)

// import {a, b, c} from './constant.js'
// 类似于预执行，将结果推断后放到这里
// console.log(a + b + c)

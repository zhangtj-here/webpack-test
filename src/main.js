console.log('this is main.js')

// import $ from 'jquery'

$('body').css('background', 'red')
console.log($, jQuery)
// console.log(window.$)

import {getUserInfo} from './api/http.js'
getUserInfo().then(() => {},(error) => {
	console.log(error)
})

console.log(test,test2,IS_DEV)
// import './css/index.css';
// import './less/test.less';
// import './scss/test.scss';
// console.log('this is other.js')

// $('body img').css('width', '300px').css('height', '300px')

// 静态导入
import $ from 'jquery'  //返回的其实就是一个promise对象
// $(function() {
// 	$('#btn').click(function() {
// 		$('<div></div>').html('我是other').appendTo('body')
// 	})
// })	
import 'bootstrap'

window.onload = function() {
	document.getElementById('btn').onclick = function() {
		$('<div></div>').html('我是other').appendTo('body')
	}
}


import a from './a.js'
console.log(a.name)
/*if (true) {
	import('jquery').then(({default: $}) => {
		$(function() {
			$('<div></div>').html('我是other').appendTo('body')
		})	
	})

} else {

}*/

// window.onload = function() {
// 	document.getElementById('btn').onclick = function() {
// 		getComponent().then(item => {
// 			item.appendTo('body')
// 		})

// 	}
// }

// // 动态导入
// function getComponent() {
// 	return import('jquery').then(({default: $}) => {
// 		return	$('<div></div>').html('我是other')
// 	})
// }




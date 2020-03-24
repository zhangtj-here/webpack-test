// import './css/index.css';
// import './less/test.less';
// import './scss/test.scss';
// console.log('this is other.js')

// $('body img').css('width', '300px').css('height', '300px')

// import $ from 'jquery'  //返回的其实就是一个promise对象
/*if (true) {
	import('jquery').then(({default: $}) => {
		$(function() {
			$('<div></div>').html('我是other').appendTo('body')
		})	
	})

} else {

}*/

function getComponent() {
	return import('jquery').then(({default: $}) => {
		return	$('<div></div>').html('我是other')
	})
}

getComponent().then(item => {
	item.appendTo('body')
})



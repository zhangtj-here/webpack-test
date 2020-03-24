// import './css/index.css';
// import './less/test.less';
// import './scss/test.scss';
// console.log('this is other.js')

// $('body img').css('width', '300px').css('height', '300px')

import $ from 'jquery'

$(function() {
	$('<div></div>').html('我是other').appendTo('body')
})

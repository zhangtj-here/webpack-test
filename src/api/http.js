// let  host = 'http://localhost:8080' //服务器开启了cors的时候，使用这个
let  host = '' //开启http proxy的时候，使用这个
if (!IS_DEV) {
	host = "http://www.itheima.com"
}


let url = host + '/api/getUserInfo'

import axios from 'axios'


export const getUserInfo = () => {
	return axios.get(url)
}	
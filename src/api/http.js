let  host = 'http://localhost:8080'
if (!IS_DEV) {
	host = "http://www.itheima.com"
}

let url = host + '/api/v1/getUserInfo'

import axios from 'axios'


export const getUserInfo = () => {
	return axios.get(url)
}	
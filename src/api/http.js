let  host = 'http://localhost:8080'
if (!IS_DEV) {
	host = "http://www.itheima.com"
}

host = ""

let url = host + '/api/getUserInfo'

import axios from 'axios'


export const getUserInfo = () => {
	return axios.get(url)
}	
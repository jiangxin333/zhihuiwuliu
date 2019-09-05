import axios from 'axios'
axios.interceptors.request.use(function(config) {
	let token = 'ed741e5a39d541e7899ac12354e5439f'
	config.headers.token = token
	config.headers.type = '1'
},function(error) {
	return Promise.reject(error)
})

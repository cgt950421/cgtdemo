import axios from 'axios'
import Cookies from 'js-cookie'

const service = axios.create({
  baseURL: 'http://192.168.1.3/public/',
  timeout: 5000
})

// request拦截器
service.interceptors.request.use(config => {
  if (Cookies.get('token')) {
    config.headers['X-Token'] = Cookies.get('token')
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service

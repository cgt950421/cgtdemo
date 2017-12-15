import axios from './createAxios'

export const userLogin = params => { return axios.post('user/index.php?service=User.Login', params) }

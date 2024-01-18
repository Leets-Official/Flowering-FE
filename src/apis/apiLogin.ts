import axios from 'axios'

const apiLogin = axios.create({
  baseURL: 'https://api.fling.today/user',
  withCredentials: true,
})

export default apiLogin

import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.fling.today',
})

export default apiClient

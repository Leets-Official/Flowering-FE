import axios from 'axios'
import { useNavigate } from 'react-router'

const apiClient = axios.create({
  baseURL: 'https://api.fling.today',
})

apiClient.interceptors.request.use(
  async (config) => {
    if (config.url !== '/user/refresh') {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    const req = error.config
    if (error.response.status === 500) {
      try {
        const refresh = localStorage.getItem('refreshToken')
        const email = localStorage.getItem('email')
        const res = await apiClient.post('/user/refresh', {
          refreshToken: refresh,
          email,
        })
        const { accessToken } = res.data.data
        localStorage.setItem('accessToken', accessToken)
        req.headers.Authorization = `Bearer ${accessToken}`
      } catch (err) {
        const navigate = useNavigate()
        navigate('/login')
      }
    }
  },
)

export default apiClient

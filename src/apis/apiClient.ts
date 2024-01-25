import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.fling.today',
})

apiClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      // config.headers.Authorization = `Bearer ${accessToken}`
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJldW56enp6enoxQG5hdmVyLmNvbSIsImV4cCI6MTcwNjIyNzg4N30.ttBL4oESxU1Xec2Al75hZInQmZuz0tsDTKDpMQye1t4`
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
    if (error.response.status === 400) {
      try {
        const refresh = localStorage.getItem('refreshToken')
        const email = localStorage.getItem('email')
        const res = await apiClient.post('/user/refresh', {
          refreshToken: refresh,
          email,
        })
        const { accessToken, refreshToken } = res.data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        req.headers.Authorization = `Bearer ${accessToken}`
      } catch (err) {
        console.log(err)
      }
    }
  },
)

export default apiClient

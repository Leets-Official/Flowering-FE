import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.fling.today',
})

apiClient.interceptors.request.use(
  async (config) => {
    // const accessToken = localStorage.getItem('accessToken')
    const accessToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJldW56enp6enoxQG5hdmVyLmNvbSIsImV4cCI6MTcwNjIzNjM5OH0.pfpyHQoyGSQ1qBBzDYugkdBdVEbFRg-mOUVweL4tfyY'

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
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

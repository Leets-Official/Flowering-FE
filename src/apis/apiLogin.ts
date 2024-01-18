import axios from 'axios'

const apiLogin = axios.create({
  baseURL: 'https://api.fling.today/user',
  withCredentials: true,
})

const postLogin = async () => {
  const res = await apiLogin.post('login', {
    accessToken: localStorage.getItem('kakaoToken'),
  })

  return res
}

export const login = () => {}

export default apiLogin

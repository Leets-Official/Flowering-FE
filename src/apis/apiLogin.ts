import axios from 'axios'

const apiLogin = axios.create({
  baseURL: 'https://api.fling.today/user',
  withCredentials: true,
})

export const PostLogin = async () => {
  const res = await apiLogin.post('login', {
    accessToken: localStorage.getItem('kakaoToken'),
  })

  return res
}

export default apiLogin

import { usePostLogin } from '@/apis/hooks'
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OauthPage = () => {
  const params = new URL(document.location.toString()).searchParams
  const code = params.get('code')
  const error = params.get('error')
  const grant_type = 'authorization_code'
  const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`
  const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID
  const navigate = useNavigate()
  const { data: loginInfo } = usePostLogin()
  const [kakaoToken, setKakaoToken] = useState(false)

  useEffect(() => {
    if (loginInfo) {
      localStorage.setItem('accessToken', loginInfo.data.token.accessToken)
      localStorage.setItem('refreshToken', loginInfo.data.token.refreshToken)
      localStorage.setItem('email', loginInfo.data.email)
      navigate(`/?${loginInfo.data.userId}`)
    }
    if (loginInfo === null) {
      navigate('/signup')
    }
  }, [kakaoToken, loginInfo, navigate])
  useEffect(() => {
    const bringToken = async () => {
      try {
        const res = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        )
        if (res.status === 200) {
          localStorage.setItem('kakaoToken', res.data.access_token)
          setKakaoToken(true)
        }
      } catch (err) {
        if ((err as AxiosError).response?.status === 400) {
          throw err
        }
      }
    }
    if (error) navigate('/login')
    if (code) bringToken()
  }, [CLIENT_ID, REDIRECT_URI, code, error, navigate])

  return <div>로딩 중</div>
}
export default OauthPage

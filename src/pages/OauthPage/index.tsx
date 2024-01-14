import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OauthPage = () => {
  const params = new URL(document.location.toString()).searchParams
  const code = params.get('code')
  const error = params.get('error')
  const grant_type = 'authorization_code'
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
  const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID
  const navigate = useNavigate()
  useEffect(() => {
    const bringToken = async () => {
      await axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          {},
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res)
            navigate('/')
          }
        })
    }
    if (error) navigate('/login')
    if (code) bringToken()
  }, [code, navigate, CLIENT_ID, REDIRECT_URI, error])

  return <div>기다려</div>
}

export default OauthPage

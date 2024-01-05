import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OauthPage = () => {
  const params = new URL(document.location.toString()).searchParams
  const code = params.get('code')
  const grant_type = 'authorization_code'
  const CLIENT_ID = 'aea758d142fcdc0a424fe75b57219816'
  const REDIRECT_URI = 'http://localhost:5173/oauth'
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
          console.log(res)
          navigate('/')
        })
    }
    if (code) bringToken()
  }, [])

  return <div>기다려</div>
}

export default OauthPage

import loginImage from '@/assets/images/kakao_login_medium_wide.png'
import logo from '@/assets/images/fling.png'
import MerryGoRound from '@/components/MerryGoRound'

const LoginPage = () => {
  const LoginAssign = () => {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
    const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    window.location.href = KAKAO_AUTH_URL
  }

  return (
    <div className="flex h-full flex-col items-center bg-white">
      <img className=" mt-3 h-4 w-6" src={logo} />
      <div>
        <MerryGoRound />
      </div>
      <div className="fonx-xs mb-1 mt-[4.4rem] text-center text-[10px]">
        SNS로 간편하게 가입하기
      </div>
      <img src={loginImage} onClick={LoginAssign} />
    </div>
  )
}

export default LoginPage

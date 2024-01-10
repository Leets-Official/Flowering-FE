import loginImage from '@/assets/kakao_login_medium_wide.png'
import logo from '@/assets/fling.png'
import MerryGoRound from '@/components/MerryGoRound'

const LoginPage = () => {
  const LoginAssign = () => {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
    const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    window.location.href = KAKAO_AUTH_URL
  }

  return (
    <div className="flex h-screen flex-col items-center bg-white">
      <img className=" mt-3 h-4 w-6" src={logo} />
      <MerryGoRound ClassName="mt-9 h-[358px] w-80 rounded-[37px]" />
      <div className="flex h-[30%] flex-col justify-end gap-2.5">
        <div className="text-center text-[10px]">SNS로 간편하게 가입하기</div>
        <img src={loginImage} onClick={LoginAssign} />
      </div>
    </div>
  )
}

export default LoginPage

import Content from '@/components/Sidebar/Content'
import useGetUserInfo from '@/apis/hooks/useGetUser.ts'
import { useNavigate } from 'react-router-dom'

const Box = () => {
  const navigate = useNavigate()
  const { data } = useGetUserInfo()
  if (!data) {
    return <p>error</p>
  }
  const { nickname } = data
  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('kakaoToken')
    localStorage.removeItem('email')
    navigate('/login')
  }

  return (
    <>
      <div className="flex h-full w-[315px] flex-col gap-14 rounded-l-[50px] bg-white pl-10 pt-12">
        <p
          onClick={() => nickname && navigate('/login')}
          className="font-lg text-[22px] text-gray-300"
        >
          {nickname ? `${nickname}님` : '로그인 후 사용하세요'}
        </p>

        <div className="flex flex-col gap-8 text-gray-300">
          <Content content="MY" route="/mypage" />
          <Content content="SHOP" route="/store" />
          <Content content="LUCKY COIN" route="/coin" />
          <Content content="ITEM" route="/" />
        </div>
        <button
          className="font-xs absolute bottom-[14%] right-[25%] text-gray-200"
          onClick={() => (nickname ? logout() : navigate('/login'))}
        >
          {nickname ? 'LOGOUT' : 'LOGIN'}
        </button>
      </div>
    </>
  )
}

export default Box

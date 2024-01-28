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

  return (
    <>
      <div className="flex h-screen w-[315px] flex-col gap-14 rounded-l-[50px] bg-white pl-10 pt-12">
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
      </div>
    </>
  )
}

export default Box

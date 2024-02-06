import Content from '@/components/Sidebar/Content'
import { useNavigate } from 'react-router-dom'
import usePostNickname from '@/apis/hooks/usePostNickname.ts'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userIdState } from '@/recoil'

const Box = () => {
  const navigate = useNavigate()
  const userId = useRecoilValue(userIdState)
  const { nicknameMutation } = usePostNickname()
  const [nickname, setNickname] = useState('')

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('kakaoToken')
    localStorage.removeItem('email')
    navigate('/login')
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await nicknameMutation.mutateAsync({ userId: userId })
        setNickname(data.data)
      } catch (error) {
        console.error('에러 발생:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="flex h-full w-[315px] flex-col gap-14 rounded-l-[50px] bg-white pl-10 pt-12">
        <p
          onClick={() => !nickname && navigate('/login')}
          className="font-lg cursor-pointer text-[22px] text-gray-300"
        >
          {nickname ? `${nickname}님` : '로그인 후 사용하세요'}
        </p>
        <div className="flex flex-col gap-8 text-gray-300">
          <Content isLoggedIn={!!nickname} content="MY" route="/mypage" />
          <Content isLoggedIn={!!nickname} content="SHOP" route="/store" />
          <Content isLoggedIn={!!nickname} content="LUCKY COIN" route="/coin" />
          <Content isLoggedIn={!!nickname} content="ITEM" route="/collection" />
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

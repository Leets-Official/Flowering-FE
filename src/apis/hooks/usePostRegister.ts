import apiClient from '../apiClient'
import { useSuspenseQuery } from '@tanstack/react-query'

interface registerProps {
  nickname: string
}
const usePostRegister = ({ nickname }: registerProps) => {
  const postRegister = async () => {
    const res = await apiClient.post('/user/register', {
      accessToken: localStorage.getItem('kakaoToken'),
      nickname,
    })

    return res.data
  }

  return useSuspenseQuery({
    queryKey: ['/user/register'],
    queryFn: postRegister,
  })
}

export default usePostRegister

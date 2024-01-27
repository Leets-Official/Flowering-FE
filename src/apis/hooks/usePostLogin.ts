import apiClient from '../apiClient'
import { useMutation } from '@tanstack/react-query'

interface PostLoginProps {
  accessToken: string | null
}

interface Response {
  code: number
  message: string
  data: {
    userId: string
    email: string
    nickname: string
    token: {
      accessToken: string
      refreshToken: string
    }
  }
}

const usePostLogin = () => {
  const postLogin = async (data: PostLoginProps) => {
    return await apiClient.post<Response>('/user/login', data)
  }

  return useMutation({ mutationFn: postLogin })
}
export default usePostLogin

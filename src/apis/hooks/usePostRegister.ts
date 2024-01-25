import apiClient from '../apiClient'
import { useMutation } from '@tanstack/react-query'

interface PostRegisterProps {
  nickname: string
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

const usePostRegister = () => {
  const postRegister = async (data: PostRegisterProps) => {
    return await apiClient.post<Response>('/user/register', data)
  }

  return useMutation({ mutationFn: postRegister })
}

export default usePostRegister

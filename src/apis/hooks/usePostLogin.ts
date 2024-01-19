import { LoginInfo } from '@/types'
import apiClient from '../apiClient'
import { useSuspenseQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

const usePostLogin = () => {
  const postLogin = async () => {
    if (localStorage.getItem('kakaoToken')) {
      try {
        const res = await apiClient.post<LoginInfo>('/user/login', {
          accessToken: localStorage.getItem('kakaoToken'),
        })

        return res.data
      } catch (e) {
        if ((e as AxiosError).response?.status === 400) {
          return undefined
        }
      }
    }

    return null
  }

  return useSuspenseQuery({
    queryKey: ['/user/login'],
    queryFn: postLogin,
  })
}

export default usePostLogin

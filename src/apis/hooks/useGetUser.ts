import { useSuspenseQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import type { UserInfo } from '@/types'

const useGetUser = () => {
  const getUserInfo = async () => {
    const response = await apiClient.get<UserInfo>(`/user/by-token`)

    return response.data
  }

  return useSuspenseQuery({
    queryKey: [`/user/by-token`],
    queryFn: getUserInfo,
  })
}

export default useGetUser

import { useMutation } from '@tanstack/react-query'
import apiClient from '../apiClient'

interface PostCoinProps {
  coin: number
}

const usePostCoin = () => {
  const addCoin = async ({ coin }: PostCoinProps) => {
    return await apiClient.post('coin', { coin })
  }

  return useMutation({ mutationFn: addCoin })
}

export default usePostCoin

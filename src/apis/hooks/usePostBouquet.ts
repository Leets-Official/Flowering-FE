import apiClient from '../apiClient'
import { useMutation } from '@tanstack/react-query'

interface CreateBouquetProps {
  wrapper: string
  ribbon: string
  bouquetName: string
  dDay: string
}

const usePostBouquet = () => {
  const postBouquet = async (data: CreateBouquetProps) => {
    return await apiClient.post('/bouquet', data)
  }

  return useMutation({ mutationFn: postBouquet })
}

export default usePostBouquet

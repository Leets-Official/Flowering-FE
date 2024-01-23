import { useMutation } from '@tanstack/react-query'
import apiClient from '../apiClient'

interface Response {
  code: number
  message: string
  data: string
}

interface EditBouquetProps {
  wrapper: string
  ribbon: string
  item1: string
  item2: string
  item3: string
}

const useEditBouquet = () => {
  const editBouquet = async (data: EditBouquetProps) => {
    return await apiClient.patch<Response>(`/bouquet`, data)
  }

  return useMutation({ mutationFn: editBouquet })
}

export default useEditBouquet

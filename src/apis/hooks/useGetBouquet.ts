import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import type { BouquetInfo } from '@/types'

interface Response {
  data: BouquetInfo
}

const useGetBouquet = ({ id }: { id: string }) => {
  const getBouquet = async () => {
    const response = await apiClient.get<Response>(`/bouquet/${id}`)

    return response.data.data
  }

  return useQuery({
    queryKey: [`/bouquet/${id}`],
    queryFn: getBouquet,
    enabled: id !== '',
  })
}

export default useGetBouquet

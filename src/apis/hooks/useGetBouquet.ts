import { useSuspenseQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import type { BouquetInfo } from '@/types'

const useGetBouquet = ({ id }: { id: string }) => {
  const getBouquet = async () => {
    const response = await apiClient.get<BouquetInfo>(`/bouquet/${id}`)

    return response.data
  }

  return useSuspenseQuery({
    queryKey: [`/bouquet/${id}`],
    queryFn: getBouquet,
  })
}

export default useGetBouquet

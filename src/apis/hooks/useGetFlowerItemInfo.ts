import { useQuery } from '@tanstack/react-query'
import { ItemInfo } from '@/types'
import apiClient from '../apiClient'

interface Response {
  data: ItemInfo
}

const useGetFlowerItemInfo = ({
  id,
  type,
}: {
  id: string | null
  type: string | null
}) => {
  const queryKey = ['flower', { id }]
  const getFlowerItemInfo = async () => {
    const response = await apiClient.get<Response>(`/floweritem-info/${id}`)

    return response.data.data
  }
  const { data } = useQuery<ItemInfo, Error>({
    queryKey,
    queryFn: () => getFlowerItemInfo(),
    enabled: type === 'Flower',
  })

  return { data }
}

export default useGetFlowerItemInfo

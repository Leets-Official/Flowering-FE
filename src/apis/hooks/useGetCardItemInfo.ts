import { useQuery } from '@tanstack/react-query'
import { ItemInfo } from '@/types'
import apiClient from '../apiClient'

interface Response {
  data: ItemInfo
}

const useGetCardItemInfo = ({
  id,
  type,
}: {
  id: string | null
  type: string | null
}) => {
  const queryKey = ['card', { id }]
  const getCardItemInfo = async () => {
    const response = await apiClient.get<Response>(`/carditem-info/${id}`)

    return response.data.data
  }
  const { data } = useQuery<ItemInfo, Error>({
    queryKey,
    queryFn: () => getCardItemInfo(),
    enabled: type === 'Card',
  })

  return { data }
}

export default useGetCardItemInfo

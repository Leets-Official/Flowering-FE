import { useQuery } from '@tanstack/react-query'
import { ItemInfo } from '@/types'
import apiClient from '../apiClient'

interface Response {
  data: ItemInfo
}

const useGetDecoItemInfo = ({
  id,
  type,
}: {
  id: string | null
  type: string | null
}) => {
  const queryKey = ['deco', { id }]
  const getDecoItemInfo = async () => {
    const response = await apiClient.get<Response>(`/decoitem-info?id=${id}`)

    return response.data.data
  }
  const { data } = useQuery<ItemInfo, Error>({
    queryKey,
    queryFn: () => getDecoItemInfo(),
    enabled: type === 'Object',
  })

  return { data }
}

export default useGetDecoItemInfo

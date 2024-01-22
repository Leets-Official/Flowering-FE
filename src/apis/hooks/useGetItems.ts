import { useQuery } from '@tanstack/react-query'
import { ItemsInfo } from '@/types'
import { items } from '@/apis/service'

const useGetItems = () => {
  const queryKey = ['items']
  const { isLoading, isError, data } = useQuery<ItemsInfo, Error>({
    queryKey,
    queryFn: items,
  })

  return { isLoading, isError, data }
}

export default useGetItems

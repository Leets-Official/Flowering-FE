import { useSuspenseQuery } from '@tanstack/react-query'
import { ItemsInfo } from '@/types'
import { items } from '@/apis/service'

const useGetItems = () => {
  const queryKey = ['items']

  return useSuspenseQuery<ItemsInfo, Error>({
    queryKey,
    queryFn: items,
  })
}

export default useGetItems

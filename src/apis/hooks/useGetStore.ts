import { useQuery } from '@tanstack/react-query'
import { store } from '@/apis/service'
import { StoreInfo } from '@/types'

const useGetStore = () => {
  const queryKey = ['storeItem']

  return useQuery<StoreInfo, Error>({
    queryKey,
    queryFn: store,
  })
}

export default useGetStore

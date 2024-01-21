import { useQuery } from '@tanstack/react-query'
import { store } from '@/apis/service'
import { StoreInfo } from '@/types'

const useGetStore = () => {
  const queryKey = ['storeItem']
  const { isLoading, isError, data } = useQuery<StoreInfo, Error>({
    queryKey,
    queryFn: store,
  })

  return { isLoading, isError, data }
}

export default useGetStore

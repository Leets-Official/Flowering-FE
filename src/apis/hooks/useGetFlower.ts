import { useQuery } from '@tanstack/react-query'
import { FlowerInfo } from '@/types'
import { flower } from '@/apis/service'

const useGetFlower = ({ id }: { id: number }) => {
  const queryKey = ['flower']
  const { isLoading, isError, data } = useQuery<FlowerInfo, Error>({
    queryKey,
    queryFn: () => flower({ id: id }),
  })

  return { isLoading, isError, data }
}

export default useGetFlower

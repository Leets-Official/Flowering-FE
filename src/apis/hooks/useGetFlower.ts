import { useQuery } from '@tanstack/react-query'
import { flower } from '@/apis/service/flower.ts'
import { FlowerInfo } from '@/types'

export const useGetFlower = ({ id }: { id: number }) => {
  const queryKey = ['flower']
  const { isLoading, isError, data } = useQuery<FlowerInfo, Error>({
    queryKey,
    queryFn: () => flower({ id: id }),
  })

  return { isLoading, isError, data }
}

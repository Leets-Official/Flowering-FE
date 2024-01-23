import { useQuery } from '@tanstack/react-query'
import { LetterReceivedInfo } from '@/types'
import { letterReceived } from '@/apis/service'

const useGetLetterReceived = () => {
  const queryKey = ['letterReceived']
  const { isLoading, isError, data } = useQuery<LetterReceivedInfo, Error>({
    queryKey,
    queryFn: letterReceived,
  })

  return { isLoading, isError, data }
}

export default useGetLetterReceived

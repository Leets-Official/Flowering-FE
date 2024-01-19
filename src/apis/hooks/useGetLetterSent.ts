import { useQuery } from '@tanstack/react-query'
import { LetterSentInfo } from '@/types'
import { letterSent } from '@/apis/service'

const useGetLetterSent = () => {
  const queryKey = ['letterSent']
  const { isLoading, isError, data } = useQuery<LetterSentInfo, Error>({
    queryKey,
    queryFn: letterSent,
  })

  return { isLoading, isError, data }
}

export default useGetLetterSent

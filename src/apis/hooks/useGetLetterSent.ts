import { useQuery } from '@tanstack/react-query'
import { letterSent } from '@/apis/service/letterSent.ts'
import { LetterSentInfo } from '@/types'

export const useGetLetterSent = () => {
  const queryKey = ['letterSent']
  const { isLoading, isError, data } = useQuery<LetterSentInfo, Error>({
    queryKey,
    queryFn: letterSent,
  })

  return { isLoading, isError, data }
}

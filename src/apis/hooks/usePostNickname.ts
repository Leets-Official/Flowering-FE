import { useMutation } from '@tanstack/react-query'
import nickname from '@/apis/service/nickname.ts'

const usePostNickname = () => {
  const nicknameMutation = useMutation({
    mutationFn: nickname,
  })

  return {
    nicknameMutation,
  }
}

export default usePostNickname

import { useMutation } from '@tanstack/react-query'
import { writeLetter } from '@/apis/service'
import { useNavigate } from 'react-router-dom'

const usePostWriteLetter = (onSuccessCallback: () => void) => {
  const navigate = useNavigate()

  const writeLetterMutation = useMutation({
    mutationFn: writeLetter,
    onSuccess: () => {
      onSuccessCallback()
      navigate('/write')
    },
  })

  return {
    writeLetterMutation,
  }
}

export default usePostWriteLetter

import { useMutation } from '@tanstack/react-query'
import { writeLetter } from '@/apis/service'
import { useNavigate } from 'react-router-dom'

const usePostWriteLetter = () => {
  const navigate = useNavigate()

  const writeLetterMutation = useMutation({
    mutationFn: writeLetter,
    onSuccess: () => {
      navigate('/')
    },
  })

  return {
    writeLetterMutation,
  }
}

export default usePostWriteLetter

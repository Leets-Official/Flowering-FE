import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { storeCard } from '@/apis/service'

const usePostStoreCard = (onSuccessCallback: () => void) => {
  const navigate = useNavigate()

  const storeCardMutation = useMutation({
    mutationFn: storeCard,
    onSuccess: () => {
      onSuccessCallback()
      navigate('/store/purchase')
    },
  })

  return {
    storeCardMutation,
  }
}

export default usePostStoreCard

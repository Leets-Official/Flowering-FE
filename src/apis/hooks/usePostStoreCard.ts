import { useMutation } from '@tanstack/react-query'
import { storeCard } from '@/apis/service'

const usePostStoreCard = (setConfirmPurchase: any) => {
  const storeCardMutation = useMutation({
    mutationFn: storeCard,
    onSuccess: () => {
      setConfirmPurchase(true)
    },
  })

  return {
    storeCardMutation,
  }
}

export default usePostStoreCard

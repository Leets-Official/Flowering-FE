import { useMutation } from '@tanstack/react-query'
import { storeCard } from '@/apis/service'

interface selectCard {
  setConfirmPurchase: React.Dispatch<React.SetStateAction<boolean>>
}
const usePostStoreCard = ({ setConfirmPurchase }: selectCard) => {
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

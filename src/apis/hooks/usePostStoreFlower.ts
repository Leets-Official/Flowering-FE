import { useMutation } from '@tanstack/react-query'
import { storeFlower } from '@/apis/service'

interface selectFlower {
  setConfirmPurchase: React.Dispatch<React.SetStateAction<boolean>>
}
const usePostStoreFlower = ({ setConfirmPurchase }: selectFlower) => {
  const storeFlowerMutation = useMutation({
    mutationFn: storeFlower,
    onSuccess: () => {
      setConfirmPurchase(true)
    },
  })

  return {
    storeFlowerMutation,
  }
}

export default usePostStoreFlower

import { useMutation } from '@tanstack/react-query'
import { storeFlower } from '@/apis/service'

const usePostStoreFlower = (setConfirmPurchase: any) => {
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

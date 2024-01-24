import { useMutation } from '@tanstack/react-query'
import { storeDeco } from '@/apis/service'

const usePostStoreDeco = (setConfirmPurchase: any) => {
  const storeDecoMutation = useMutation({
    mutationFn: storeDeco,
    onSuccess: () => {
      setConfirmPurchase(true)
    },
  })

  return {
    storeDecoMutation,
  }
}

export default usePostStoreDeco

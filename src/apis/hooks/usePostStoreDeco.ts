import { useMutation } from '@tanstack/react-query'
import { storeDeco } from '@/apis/service'

interface selectDeco {
  setConfirmPurchase: React.Dispatch<React.SetStateAction<boolean>>
}
const usePostStoreDeco = ({ setConfirmPurchase }: selectDeco) => {
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

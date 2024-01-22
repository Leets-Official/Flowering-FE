import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { storeDeco } from '@/apis/service'

const usePostStoreDeco = (onSuccessCallback: () => void) => {
  const navigate = useNavigate()

  const storeDecoMutation = useMutation({
    mutationFn: storeDeco,
    onSuccess: () => {
      onSuccessCallback()
      navigate('/store/purchase')
    },
  })

  return {
    storeDecoMutation,
  }
}

export default usePostStoreDeco

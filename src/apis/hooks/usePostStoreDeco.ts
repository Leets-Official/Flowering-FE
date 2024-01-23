import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { storeDeco } from '@/apis/service'

const usePostStoreDeco = () => {
  const navigate = useNavigate()

  const storeDecoMutation = useMutation({
    mutationFn: storeDeco,
    onSuccess: () => {
      navigate('/store/purchase')
    },
  })

  return {
    storeDecoMutation,
  }
}

export default usePostStoreDeco

import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { storeFlower } from '@/apis/service'

const usePostStoreFlower = () => {
  const navigate = useNavigate()

  const storeFlowerMutation = useMutation({
    mutationFn: storeFlower,
    onSuccess: () => {
      navigate('/store/purchase')
    },
  })

  return {
    storeFlowerMutation,
  }
}

export default usePostStoreFlower

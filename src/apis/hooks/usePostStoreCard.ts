import apiClient from '@/apis/apiClient.ts'
import { StoreCardInfo } from '@/types'

const usePostStoreCard = async ({ cardId, count }: StoreCardInfo) => {
  try {
    const res = await apiClient.post('/store/card', {
      cardId,
      count,
    })
    console.log(res.data)

    return res.data
  } catch (error) {
    console.error('카드 저장 중에 오류가 발생했습니다:', error)
  }
}

export default usePostStoreCard

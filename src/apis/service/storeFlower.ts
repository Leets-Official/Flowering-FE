import apiClient from '@/apis/apiClient.ts'
import { StoreFlowerInfo } from '@/types'

const storeFlower = async ({ flowerItemId, count }: StoreFlowerInfo) => {
  try {
    const res = await apiClient.post('/store/flower', {
      flowerItemId,
      count,
    })
    console.log(res.data)

    return res.data
  } catch (error) {
    console.error('꽃 저장 중에 오류가 발생했습니다:', error)
  }
}

export default storeFlower

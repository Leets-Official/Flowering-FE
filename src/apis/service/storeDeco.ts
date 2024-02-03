import apiClient from '@/apis/apiClient.ts'
import { StoreDecoInfo } from '@/types'

const storeDeco = async ({ decoId }: StoreDecoInfo) => {
  try {
    const res = await apiClient.post('/store/deco', {
      decoId,
    })

    return res.data
  } catch (error) {
    console.error('데코 저장 중에 오류가 발생했습니다:', error)
  }
}

export default storeDeco

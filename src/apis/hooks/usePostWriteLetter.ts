import apiClient from '@/apis/apiClient.ts'
import { WriteLetterInfo } from '@/types'

const usePostWriteLetter = async ({
  letter,
  cardType,
  flowerType,
}: WriteLetterInfo) => {
  //메인페이지 url에 있음
  const userId = '0d14b366-9da6-418a-9013-d9cfed398267'
  try {
    const res = await apiClient.post(`/flower/${userId}`, {
      letter,
      cardType,
      flowerType,
    })
    console.log(res.data)

    return res.data
  } catch (error) {
    console.error('편지 작성 저장 중에 오류가 발생했습니다:', error)
  }
}

export default usePostWriteLetter

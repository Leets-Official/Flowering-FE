import apiClient from '@/apis/apiClient.ts'
import { WriteLetterInfo } from '@/types'

const usePostWriteLetter = async ({
  letter,
  cardType,
  flowerType,
}: WriteLetterInfo) => {
  //메인페이지 url에 있음
  const userId = 'b1f9275f-1f65-4927-8654-0bef0616b89c'
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

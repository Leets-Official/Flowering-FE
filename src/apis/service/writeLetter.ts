import apiClient from '@/apis/apiClient.ts'
import { WriteLetterInfo } from '@/types'

const writeLetter = async ({
  letter,
  cardType,
  flowerType,
}: WriteLetterInfo) => {
  //메인페이지 url에 있음
  const userId = '4844baa8-abbb-4f6c-8c31-b7e98c14725a'
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

export default writeLetter

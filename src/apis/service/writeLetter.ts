import apiClient from '@/apis/apiClient.ts'
import { WriteLetterInfo } from '@/types'

const writeLetter = async ({
  letter,
  cardType,
  flowerType,
}: WriteLetterInfo) => {
  //메인페이지 url에 있음
  const userId = '3ee1e11b-a105-4db2-ab04-04cd2804c27e'
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

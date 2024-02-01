import apiClient from '@/apis/apiClient.ts'
import { WriteLetterInfo } from '@/types'

const writeLetter = async ({
  letter,
  cardType,
  flowerType,
}: WriteLetterInfo) => {
  const urlParams = new URLSearchParams(window.location.search)
  const userId = urlParams.get('addr')
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

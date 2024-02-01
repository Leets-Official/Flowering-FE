import apiClient from '@/apis/apiClient.ts'
import { NickNameInfo } from '@/types'

const writeLetter = async ({ userId }: NickNameInfo) => {
  try {
    const res = await apiClient.post(`/user/nickname`, {
      userId,
    })

    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default writeLetter

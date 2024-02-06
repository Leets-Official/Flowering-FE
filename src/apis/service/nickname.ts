import apiClient from '@/apis/apiClient.ts'
import { NickNameInfo } from '@/types'
import error500Page from '@/pages/Error500Page'

const writeLetter = async ({ userId }: NickNameInfo) => {
  try {
    const res = await apiClient.post(`/user/nickname`, {
      userId,
    })

    return res.data
  } catch (error) {
    return error500Page
  }
}

export default writeLetter

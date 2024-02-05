import apiClient from '@/apis/apiClient.ts'
import error500Page from '@/pages/Error500Page'

const letterSent = async () => {
  try {
    return await apiClient.get('/letter-sent').then((res) => res.data)
  } catch (error) {
    return error500Page
  }
}

export default letterSent

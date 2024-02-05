import apiClient from '@/apis/apiClient.ts'
import error500Page from '@/pages/Error500Page'

const letterReceived = async () => {
  try {
    return await apiClient.get('/letter-received').then((res) => res.data)
  } catch (error) {
    return error500Page
  }
}

export default letterReceived

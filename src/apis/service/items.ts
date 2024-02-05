import apiClient from '@/apis/apiClient.ts'
import error500Page from '@/pages/Error500Page'

const items = async () => {
  try {
    return await apiClient.get('/items').then((res) => res.data.data)
  } catch (error) {
    return error500Page
  }
}

export default items

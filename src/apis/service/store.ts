import apiClient from '@/apis/apiClient.ts'
import error500Page from '@/pages/Error500Page'

const store = async () => {
  try {
    return await apiClient.get('/store').then((res) => res.data)
  } catch (error) {
    return error500Page
  }
}

export default store

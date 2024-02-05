import apiClient from '@/apis/apiClient.ts'
import error500Page from '@/pages/Error500Page'

const flower = async ({ id }: { id: number }) => {
  try {
    const response = await apiClient.get('/flower', { params: { id } })

    return response.data
  } catch (error) {
    return error500Page
  }
}

export default flower

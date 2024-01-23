import apiClient from '@/apis/apiClient.ts'

const flower = async ({ id }: { id: number }) => {
  try {
    const response = await apiClient.get('/flower', { params: { id } })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default flower

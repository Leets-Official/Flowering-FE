import apiClient from '@/apis/apiClient.ts'

const items = async () => {
  try {
    return await apiClient.get('/items').then((res) => res.data)
  } catch (error) {
    console.log(error)
  }
}

export default items

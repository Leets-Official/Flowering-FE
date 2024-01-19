import apiClient from '@/apis/apiClient.ts'

export const flower = async ({ id }: { id: number }) => {
  try {
    return await apiClient
      .get('/flower', { params: { id: id } })
      .then((res) => res.data)
  } catch (error) {
    console.log(error)
  }
}

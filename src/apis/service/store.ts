import apiClient from '@/apis/apiClient.ts'

const store = async () => {
  try {
    return await apiClient.get('/store').then((res) => res.data)
  } catch (error) {
    console.log(error)
  }
}

export default store

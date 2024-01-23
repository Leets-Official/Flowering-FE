import apiClient from '@/apis/apiClient.ts'

const letterReceived = async () => {
  try {
    return await apiClient.get('/letter-received').then((res) => res.data)
  } catch (error) {
    console.log(error)
  }
}

export default letterReceived

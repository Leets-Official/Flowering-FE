import apiClient from '@/apis/apiClient.ts'

const letterSent = async () => {
  try {
    return await apiClient.get('/letter-sent').then((res) => res.data)
  } catch (error) {
    console.log(error)
  }
}

export default letterSent

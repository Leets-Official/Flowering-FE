import { useEffect } from 'react'
import { CreatedBouquet, UncreatedBouquet } from './components'
import { useGetBouquet } from '@/apis/hooks'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userIdState } from '@/recoil'

const MainPage = () => {
  const navigator = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const userIdFromRecoil = useRecoilValue(userIdState)
  const address = searchParams.get('addr')
  const userId = address || userIdFromRecoil

  const { data: bouquetInfo, isError } = useGetBouquet({
    id: userId,
  })

  useEffect(() => {
    if (isError) navigator('/login')
  }, [isError, navigator])

  useEffect(() => {
    if (!userIdFromRecoil && !address) {
      navigator('/login')

      return
    }
  }, [address, navigator, userIdFromRecoil])

  useEffect(() => {
    if (!address && userIdFromRecoil) {
      setSearchParams({ addr: userId })
    }
  }, [address, setSearchParams, userId, userIdFromRecoil])

  return (
    <>
      <main className="flex h-dvh flex-col">
        {bouquetInfo && bouquetInfo.bouquetDesign ? (
          <CreatedBouquet bouquetInfo={bouquetInfo} userId={userId} />
        ) : (
          <UncreatedBouquet />
        )}
      </main>
    </>
  )
}

export default MainPage

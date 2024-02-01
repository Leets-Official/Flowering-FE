import { Sidebar, Header } from '@/components'
import { useState, useEffect, startTransition } from 'react'
import { ICONS } from '@/constants'
import { CreatedBouquet, UncreatedBouquet } from './components'
import { useGetBouquet } from '@/apis/hooks'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userIdState } from '@/recoil'

const MainPage = () => {
  const navigator = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const userIdFromRecoil = useRecoilValue(userIdState)
  const address = searchParams.get('addr')
  const userId = address || userIdFromRecoil

  const { data: bouquetInfo } = useGetBouquet({
    id: userId,
  })

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

  const onDecoBouquet = () => {
    startTransition(() =>
      navigator('/decorate-bouquet', { state: bouquetInfo }),
    )
  }

  return (
    <>
      <main className="flex h-dvh flex-col">
        <Header
          leftIcon={ICONS.DRAW}
          rightIcon={ICONS.SIDEBAR}
          setSidebarOpen={setSidebarOpen}
          onDecoBouquet={onDecoBouquet}
        />
        {bouquetInfo && bouquetInfo.bouquetDesign ? (
          <CreatedBouquet bouquetInfo={bouquetInfo} userId={userId} />
        ) : (
          <UncreatedBouquet />
        )}
      </main>
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}

export default MainPage

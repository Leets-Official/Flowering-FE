import { Sidebar, Header } from '@/components'
import { useState, useEffect } from 'react'
import { ICONS } from '@/constants'
import { CreatedBouquet, UncreatedBouquet } from './components'
import { useGetBouquet, useGetUser } from '@/apis/hooks'
import { useSearchParams, useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigator = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const { data: userInfo } = useGetUser()

  const address = searchParams.get('addr')
  const userId = address || userInfo.userId

  const { data: bouquetInfo } = useGetBouquet({
    id: userId,
  })

  useEffect(() => {
    if (!address) {
      setSearchParams({ addr: userId })
    }
  }, [address, setSearchParams, userId])

  const onDecoBouquet = () => {
    navigator('/decorate-bouquet', { state: bouquetInfo })
  }

  return (
    <>
      <main className="flex h-screen flex-col">
        <Header
          leftIcon={ICONS.DRAW}
          rightIcon={ICONS.SIDEBAR}
          setSidebarOpen={setSidebarOpen}
          onDecoBouquet={onDecoBouquet}
        />
        {bouquetInfo.bouquetDesign ? (
          <CreatedBouquet bouquetInfo={bouquetInfo} />
        ) : (
          <UncreatedBouquet />
        )}
      </main>
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}

export default MainPage

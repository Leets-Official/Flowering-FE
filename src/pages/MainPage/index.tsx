import { Sidebar, Header } from '@/components'
import { useState } from 'react'
import { ICONS } from '@/constants'
import { CreatedBouquet, UncreatedBouquet } from './components'
import { useGetBouquet } from '@/apis/hooks'

// 데이터 있는 테스트 userId : cfe9cfe5-59fb-450a-9496-02bf22cd2548
// 데이터 없는 테스트 userId : b1f9275f-1f65-4927-8654-0bef0616b89c
const userId = 'cfe9cfe5-59fb-450a-9496-02bf22cd2548'

const MainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const { data: bouquetInfo } = useGetBouquet({
    id: userId,
  })

  return (
    <>
      <main className="flex h-screen flex-col">
        <Header
          leftIcon={ICONS.DRAW}
          rightIcon={ICONS.SIDEBAR}
          setSidebarOpen={setSidebarOpen}
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

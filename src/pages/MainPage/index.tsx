import { Sidebar, Header } from '@/components'
import { useState } from 'react'
import { ICONS } from '@/constants'
import { CreatedBouquet, UncreatedBouquet } from './components'
import { useGetBouquet } from '@/apis/hooks'

// 데이터 있는 테스트 userId : 274831eb-64d2-429b-9aed-b8144b131bf6
// 데이터 없는 테스트 userId : b1f9275f-1f65-4927-8654-0bef0616b89c
const userId = 'b1f9275f-1f65-4927-8654-0bef0616b89c'

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

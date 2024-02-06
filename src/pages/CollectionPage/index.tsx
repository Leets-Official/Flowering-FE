import { Header, Sidebar } from '@/components'
import { Content } from './components'
import { ICONS } from '@/constants'
import useGetItems from '@/apis/hooks/useGetItems'
import { useState } from 'react'

const CollectionPage = () => {
  const { data: collectionInfo } = useGetItems()
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Header
        setSidebarOpen={setSidebarOpen}
        leftIcon={ICONS.GOBACK}
        rightIcon={ICONS.SIDEBAR}
      />
      <div className="font-xl mx-6 mb-8">ITEM</div>
      {collectionInfo && (
        <div className="overflow-y-auto scrollbar-hide">
          <Content ItemType="Object" data={collectionInfo?.decoItems} />
          <Content ItemType="Flower" data={collectionInfo?.flowers} />
          <Content ItemType="Card" data={collectionInfo?.cardItems} />
        </div>
      )}
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  )
}

export default CollectionPage

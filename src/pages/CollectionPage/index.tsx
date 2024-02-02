import { Header } from '@/components'
import { Content } from './components'
import useGetItems from '@/apis/hooks/useGetItems'

const CollectionPage = () => {
  const { data: collectionInfo } = useGetItems()

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Header leftIcon="HomeIcon" />
      <div className="font-xl mx-6 mb-8">ITEM</div>
      {collectionInfo && (
        <div className="overflow-y-auto scrollbar-hide">
          <Content ItemType="Object" data={collectionInfo?.decoItems} />
          <Content ItemType="Flower" data={collectionInfo?.flowers} />
          <Content ItemType="Card" data={collectionInfo?.cardItems} />
        </div>
      )}
    </div>
  )
}

export default CollectionPage

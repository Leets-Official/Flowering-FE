import { Header } from '@/components'
import { Content } from './components'
import useGetItems from '@/apis/hooks/useGetItems'

const CollectionPage = () => {
  const { data: collectionInfo } = useGetItems()

  return (
    <div className="bg-white">
      <Header leftIcon="HomeIcon" />
      <div className="font-xl mx-6 mb-8">ITEM</div>
      {collectionInfo && (
        <>
          <Content ItemType="Object" data={collectionInfo.decoItems} />
          <Content ItemType="Flower" data={collectionInfo.flowers} />
          <Content ItemType="Card" data={collectionInfo.cardItems} />
        </>
      )}
    </div>
  )
}

export default CollectionPage

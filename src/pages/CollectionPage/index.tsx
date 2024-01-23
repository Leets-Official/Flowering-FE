import { Header } from '@/components'
import { Content } from './components'
import useGetItems from '@/apis/hooks/useGetItems'

const CollectionPage = () => {
  const { data: collectionInfo } = useGetItems()
  console.log(collectionInfo)

  return (
    <div className="bg-white">
      <Header leftIcon="HomeIcon" />
      <div className="font-xl mx-6 mb-8">ITEM</div>
      {collectionInfo && (
        <>
          <Content ItemType="Object" data={collectionInfo?.data.decoItems} />
          <Content ItemType="Flower" data={collectionInfo?.data.flowers} />
          <Content ItemType="Card" data={collectionInfo?.data.cardItems} />
        </>
      )}
    </div>
  )
}

export default CollectionPage

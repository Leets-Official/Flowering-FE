import { Header, Content } from './components'

const data = {
  flowers: [
    {
      id: 1,
      flowerType: 'red',
    },
    {
      id: 2,
      flowerType: 'blue',
    },
  ],
  items: [
    {
      id: 32,
      itemType: 'butterfly',
    },
  ],
  cards: [
    {
      id: 322,
      cardType: 'green',
    },
  ],
}

const CollectionPage = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export default CollectionPage

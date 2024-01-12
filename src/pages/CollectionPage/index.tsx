import { Header, Content } from './components'

const data = {
  flowers: [
    {
      id: 1,
      Type: 'red',
    },
    {
      id: 1,
      Type: 'blue',
    },
    {
      id: 1,
      Type: 'red',
    },
    {
      id: 1,
      Type: 'blue',
    },
  ],
  items: [
    {
      id: 1,
      Type: 'butterfly',
    },
  ],
  cards: [
    {
      id: 1,
      Type: 'green',
    },
    {
      id: 1,
      Type: 'green',
    },
    {
      id: 1,
      Type: 'green',
    },
    {
      id: 1,
      Type: 'green',
    },
    {
      id: 1,
      Type: 'green',
    },
  ],
}

const CollectionPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Content ItemType="Object" data={data.items} />
      <Content ItemType="Flower" data={data.flowers} />
      <Content ItemType="Card" data={data.cards} />
    </div>
  )
}

export default CollectionPage

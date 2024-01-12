import { Item } from '@/components'

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

const Content = () => {
  return (
    <>
      <div className="mx-6">
        <div className="font-lg text-[#282828]">Object</div>
        <div className="flex flex-wrap gap-[27px]">
          {data.flowers.map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => {
                  console.log(element.id)
                }}
              >
                <Item id={element.id} />
              </div>
            )
          })}
        </div>
        <div className="font-lg mt-10 text-[#282828]">Flower</div>
        <div className="flex flex-wrap gap-[27px]">
          {data.flowers.map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => {
                  console.log(element.id)
                }}
              >
                <Item id={element.id} />
              </div>
            )
          })}
        </div>
        <div className="font-lg mt-10 text-[#282828]">Card</div>
        <div className="flex flex-wrap gap-[27px]">
          {data.flowers.map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => {
                  console.log(element.id)
                }}
              >
                <Item id={element.id} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Content

import { Item } from '@/components'

interface CollectionProps {
  ItemType: string
  data: { id: number }
}

const Content = ({ItemType, data}) => {
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

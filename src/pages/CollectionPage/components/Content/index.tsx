import { Item } from '@/components'

interface CollectionProps {
  ItemType: string
  data: DataProps[]
}

interface DataProps {
  id: number
  Type: string
}

const Content = ({ ItemType, data }: CollectionProps) => {
  return (
    <>
      <div className="mx-6 mt-5">
        <div className="font-lg text-[#282828]">{ItemType}</div>
        <div className="flex flex-wrap gap-x-[55.51px] gap-y-[11px]">
          {data.map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => {
                  console.log(element.id)
                }}
                className="cursor-pointer"
              >
                <Item id={element.id} />
                <div className="font-xs mt-[5px] text-center">123</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Content

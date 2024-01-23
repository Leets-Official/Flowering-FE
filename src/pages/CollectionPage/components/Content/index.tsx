import { Item } from '@/components'
import { useNavigate } from 'react-router'

interface CollectionProps {
  ItemType: string
  data: DataProps[]
}

interface DataProps {
  id: number
  type: string
  owned: boolean
  amount?: number
}

const Content = ({ ItemType, data }: CollectionProps) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="mx-6 mt-5">
        <div className="font-lg mb-2 text-gray-300">{ItemType}</div>
        <div className="flex flex-wrap gap-x-[3.46rem] gap-y-3">
          {data.map((element) => {
            return (
              <div
                key={element.type}
                onClick={() => {
                  navigate(`/item/${element.type}`)
                }}
                className="cursor-pointer"
              >
                <Item id={element.Type} />
                <div className="font-xs mt-1.5 text-center text-gray-200">
                  {element.amount === -1 ? 'FREE' : element.amount}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Content

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
      <div className="mx-6 mb-5 mt-5">
        <div className="font-lg mb-2 text-gray-300">{ItemType}</div>
        <div className="mt-4 grid grid-cols-3 gap-x-10 gap-y-1.5">
          {data.map((element) => {
            return (
              <div
                key={element.type}
                onClick={() => {
                  if (element.owned)
                    navigate(`/item?type=${ItemType}&id=${element.id}`)
                }}
                className={`flex cursor-pointer flex-col items-center ${element.owned ? null : 'opacity-40 blur-[5px]'}`}
              >
                <Item name={element.type} />
                <div className="font-xs mt-1.5 text-center text-gray-200">
                  {element.amount === -1 ? (
                    'FREE'
                  ) : element.amount == null || !element.owned ? (
                    <>&nbsp;</>
                  ) : (
                    element.amount
                  )}
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

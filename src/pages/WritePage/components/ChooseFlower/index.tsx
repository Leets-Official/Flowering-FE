import { Item } from '@/components'
import { useState } from 'react'
import useGetItems from '@/apis/hooks/useGetItems.ts'
import Purchase from '@/components/Purchase'

interface ChooseFlowerProps {
  selectedFlower: string
  setSelectedFlower: React.Dispatch<React.SetStateAction<string>>
}

const ChooseFlower = ({
  selectedFlower,
  setSelectedFlower,
}: ChooseFlowerProps) => {
  const { data } = useGetItems()
  const flowers = data?.data.flowers
  const [selectedFlowerIndex, setSelectedFlowerIndex] = useState<number>(0)
  const ownedFlowers = flowers ? flowers.filter((flower) => flower.owned) : []

  const flowerTypes = ownedFlowers.map((flower) => flower.type)
  const handleCircleClick = (index: number) => {
    setSelectedFlower(flowerTypes[index])
    setSelectedFlowerIndex(index)
  }

  return (
    <div className="mx-7 flex h-full flex-col overflow-hidden">
      <p className="font-ls text-gray-200">
        원하는 꽃이 없다면 상점에서 구매 후 골라주세요.
      </p>
      <div className="flex h-full flex-col justify-center">
        <div className="font-xs mt-4 flex flex-col items-center">
          <Purchase className="h-[250px] w-[176px]" name={selectedFlower} />
          <p className="mb-2 mt-5 rounded-[50px] border px-3 py-1">
            {selectedFlower.replace(/-/g, ' ')}
          </p>
        </div>

        <div className="mb-7 flex flex-nowrap gap-5 overflow-y-auto scrollbar-hide">
          {flowerTypes.map((flower, index) => (
            <div
              key={index}
              className={`mt-7 cursor-pointer ${
                selectedFlowerIndex === index
                  ? 'rounded-full border-[1px] border-gray-300'
                  : ''
              }`}
              style={{ flex: '0 0 auto', minWidth: '10px' }}
              onClick={() => handleCircleClick(index)}
            >
              <Item name={flower} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseFlower

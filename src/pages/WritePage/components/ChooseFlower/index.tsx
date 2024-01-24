import { Item } from '@/components'
import { FlowerIcon } from '@/assets/Icons'
import { useState } from 'react'

interface ChooseFlowerProps {
  selectedFlower: string
  setSelectedFlower: React.Dispatch<React.SetStateAction<string>>
}

const ChooseFlower = ({
  selectedFlower,
  setSelectedFlower,
}: ChooseFlowerProps) => {
  const flowers = ['화양연화', '장미', '튤립', '해바라기', '코스모스']
  const [selectedFlowerIndex, setSelectedFlowerIndex] = useState<number | null>(
    null,
  )
  const handleCircleClick = (index: number) => {
    setSelectedFlower(flowers[index])
    setSelectedFlowerIndex(index)
  }

  return (
    <div className="mx-7 flex h-full flex-col overflow-hidden">
      <p className="font-ls text-gray-200">
        원하는 꽃이 없다면 상점에서 구매 후 골라주세요.
      </p>
      <div className="flex h-full flex-col justify-center">
        <div className="font-xs flex flex-col items-center">
          <FlowerIcon className="mt-16 h-52 w-56 rotate-[130deg] text-gray-300" />
          <p className="mb-2 mt-10 rounded-[50px] border px-3 py-1">
            {selectedFlower}
          </p>
          <p>우정</p>
        </div>

        <div className="mb-8 flex flex-nowrap gap-5 overflow-y-auto scrollbar-hide">
          {flowers.map((flower, index) => (
            <div
              key={index}
              className={`mt-5 cursor-pointer ${
                selectedFlowerIndex === index
                  ? 'rounded-full border-[1px] border-gray-300'
                  : ''
              }`}
              style={{ flex: '0 0 auto', minWidth: '10px' }}
              onClick={() => handleCircleClick(index)}
            >
              <Item name={flower} key={flower} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseFlower

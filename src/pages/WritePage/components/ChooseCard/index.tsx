import { Item } from '@/components'
import CardImage from '@/assets/images/card.png'
import { useState } from 'react'

interface ChooseCardProps {
  selectedCard: string
  setSelectedCard: React.Dispatch<React.SetStateAction<string>>
}
const ChooseCard = ({ setSelectedCard }: ChooseCardProps) => {
  const cards = ['향기-카드', 'bluePaper', 'yellowPaper']
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null,
  )

  const handleCircleClick = (index: number) => {
    setSelectedCard(cards[index])
    setSelectedCardIndex(index)
  }

  return (
    <div className="mx-7 flex h-full flex-col overflow-hidden">
      <p className="font-ls text-gray-200">
        3개의 편지지 중 하나를 골라주세요.
      </p>
      <div className="flex h-full flex-col justify-center">
        <img src={CardImage} className="mx-auto mt-10 h-[300px] w-[236px]" />
        <div className="mb-8 mt-5 flex flex-nowrap justify-center gap-5 overflow-y-auto scrollbar-hide">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`mt-5 cursor-pointer ${
                selectedCardIndex === index
                  ? 'rounded-full border-[1px] border-gray-300'
                  : ''
              }`}
              style={{ flex: '0 0 auto', minWidth: '10px' }}
              onClick={() => handleCircleClick(index)}
            >
              <Item id={card} key={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseCard

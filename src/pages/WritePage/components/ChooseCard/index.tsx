import { Item } from '@/components'
import CardImage from '@/assets/images/card.png'

interface ChooseCardProps {
  selectedCard: string
  setSelectedCard: React.Dispatch<React.SetStateAction<string>>
}
const ChooseCard = ({ setSelectedCard }: ChooseCardProps) => {
  const cards = ['redPaper', 'bluePaper', 'yellowPaper']

  const handleCircleClick = (index: number) => {
    setSelectedCard(cards[index])
  }

  return (
    <div className="mx-7 flex flex-col overflow-hidden">
      <div className="flex flex-col">
        <p className="font-ls text-gray-200">
          3개의 편지지 중 하나를 골라주세요.
        </p>
        <img src={CardImage} className="mx-auto mt-10 h-[300px] w-[236px]" />
      </div>
      <div className="mb-8 mt-5 flex flex-nowrap gap-5 overflow-y-auto scrollbar-hide">
        {cards.map((card, index) => (
          <div
            key={index}
            className="mt-5 cursor-pointer"
            style={{ flex: '0 0 auto', minWidth: '10px' }}
            onClick={() => handleCircleClick(index)}
          >
            <Item id={index} key={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChooseCard

import { Button, Header, Item } from '@/components'
import { ICONS } from '@/constants'
import { FlowerIcon } from '@/assets/Icons'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { selectedCardState } from '@/recoil'

const CardPage = () => {
  const navigate = useNavigate()
  const cards = [
    'redPaper',
    'bluePaper',
    'yellowPaper' /* Add more flowers as needed */,
  ]
  const [selectedCard, setSelectedCard] = useRecoilState(selectedCardState)

  const handleCircleClick = (index: number) => {
    setSelectedCard(cards[index])
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <Header leftIcon={ICONS.GOBACK} rightIcon={ICONS.HOME} />
      <div className="mx-7 mt-3">
        <div className="font-lg flex">
          <p className="text-gray-300">냥냥냥</p>
          <p className="text-gray-200">님께 편지 작성하기</p>
        </div>
        <p className="font-ls text-gray-200">
          3개의 편지지 중 하나를 골라주세요.
        </p>
        <div className="font-xs flex flex-col items-center">
          <FlowerIcon className="mt-16 h-52 w-56 rotate-[130deg] text-gray-300" />
          <p className="mb-2 mt-10 rounded-[50px] border px-3 py-1">
            {selectedCard}
          </p>
          <p>우정</p>
        </div>
      </div>
      <div className="scrollbar-hide mx-6 mb-8 flex flex-nowrap gap-5 overflow-y-auto">
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

      <Button
        onClick={() => navigate('/write/letter')}
        className="font-md mx-6"
        size="lg"
      >
        다음
      </Button>
    </div>
  )
}

export default CardPage

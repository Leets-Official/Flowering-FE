import { Button, Header } from '@/components'
import { ICONS } from '@/constants'
import ChooseFlower from '@/pages/WritePage/components/ChooseFlower'
import ChooseCard from '@/pages/WritePage/components/ChooseCard'
import WriteLetter from '@/pages/WritePage/components/WriteLetter'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WritePage = () => {
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] = useState(1)
  const [selectedFlower, setSelectedFlower] = useState('포인세티아')
  const [selectedCard, setSelectedCard] = useState('redPaper')
  const [letter, setLetter] = useState('')

  const handleNextClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(3)
    } else {
      console.log('Sending data to the server:', {
        selectedFlower,
        selectedCard,
        letterContent: letter,
      })
      setCurrentStep(1)
      setSelectedFlower('')
      setSelectedCard('')
      setLetter('')
      navigate('/')
    }
  }
  const isButtonDisabled = currentStep === 3 && letter.length === 0

  return (
    <div className="flex flex-col overflow-hidden">
      <Header
        leftIcon={ICONS.GOBACK}
        rightIcon={ICONS.HOME}
        onGoBack={() => {
          if (currentStep === 1) {
            navigate(-1)
          } else {
            setCurrentStep(currentStep - 1)
          }
        }}
      />
      <div className="mt-3">
        <div className="font-lg mx-7 flex">
          <p className="text-gray-300">냥냥냥</p>
          <p className="text-gray-200">님께 편지 작성하기</p>
        </div>
        {currentStep === 1 && (
          <ChooseFlower
            selectedFlower={selectedFlower}
            setSelectedFlower={setSelectedFlower}
          />
        )}
        {currentStep === 2 && (
          <ChooseCard
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
        {currentStep === 3 && (
          <WriteLetter letter={letter} setLetter={setLetter} />
        )}
        <div
          className={
            currentStep === 3
              ? 'font-md bg-gray-500 px-7 pb-16 pt-3'
              : 'font-md mx-7'
          }
        >
          <Button
            size="lg"
            onClick={handleNextClick}
            className={currentStep === 3 ? 'w-full' : 'w-full'}
            disabled={isButtonDisabled}
          >
            {currentStep < 3 ? '다음' : '보내기'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WritePage

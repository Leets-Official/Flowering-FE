import { Button, Header } from '@/components'
import { ICONS } from '@/constants'
import { ChooseFlower, ChooseCard, WriteLetter } from './components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usePostWriteLetter from '@/apis/hooks/usePostWriteLetter.ts'
import usePostNickname from '@/apis/hooks/usePostNickname.ts'

const WritePage = () => {
  const navigate = useNavigate()
  const urlParams = new URLSearchParams(window.location.search)
  const userId = urlParams.get('addr') || ''
  const [nickname, setNickname] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedFlower, setSelectedFlower] = useState('')
  const [selectedCard, setSelectedCard] = useState('')
  const [letter, setLetter] = useState('')

  const { writeLetterMutation } = usePostWriteLetter()
  const { nicknameMutation } = usePostNickname()
  const handleNextClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(3)
    } else {
      writeLetterMutation.mutate({
        letter: letter,
        cardType: selectedCard,
        flowerType: selectedFlower,
      })
      setCurrentStep(1)
      setSelectedFlower('')
      setSelectedCard('')
      setLetter('')
    }
  }
  const isButtonDisabled = currentStep === 3 && letter.length === 0

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await nicknameMutation.mutateAsync({ userId: userId })
        setNickname(data.data)
      } catch (error) {
        console.error('에러 발생:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex h-full flex-col overflow-hidden">
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
      <div className="font-lg mx-7 flex">
        <p className="text-gray-300">{nickname}</p>
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
      <div className={`font-md px-6 py-5 ${currentStep === 3 && 'pt-2'}`}>
        <Button
          size="lg"
          onClick={handleNextClick}
          className={`w-full text-white disabled:border-gray-400 disabled:bg-gray-400 `}
          disabled={isButtonDisabled}
        >
          {currentStep < 3 ? '다음' : '보내기'}
        </Button>
      </div>
    </div>
  )
}

export default WritePage

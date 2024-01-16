import { Button, Header } from '@/components'
import { ICONS } from '@/constants'
import {
  letterContentState,
  selectedCardState,
  selectedFlowerState,
} from '@/recoil'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

const LetterPage = () => {
  const navigate = useNavigate()

  const [selectedFlower] = useRecoilState(selectedFlowerState)
  const [selectedCardIndex] = useRecoilState(selectedCardState)
  const [letter, setLetter] = useRecoilState(letterContentState)
  const maxCharacterCount = 300

  const handleLetterChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const content = event.target.value
    setLetter(content)
  }
  const handleSendButtonClick = () => {
    //임시로 콘솔에 찍은 것입니다.
    console.log('Sending data to the server:', {
      selectedFlower,
      selectedCardIndex,
      letterContent: letter,
    })
    //상대방 메인페이지로 렌더링 시켜야함
    navigate('/')
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <Header leftIcon={ICONS.GOBACK} rightIcon={ICONS.HOME} />
      <div className="mx-7 mt-3 flex">
        <div className="font-lg flex">
          <p className="text-gray-300">냥냥냥</p>
          <p className="text-gray-200">님께 편지 작성하기</p>
        </div>
      </div>
      <div className="mt-10 flex h-screen w-full flex-col rounded-t-[50px] bg-[#EEEEEE] px-6 pt-12">
        <textarea
          className="font-ls h-3/4 bg-[#EEEEEE] text-gray-300"
          placeholder="자유롭게 입력해주세요."
          value={letter}
          onChange={handleLetterChange}
        />
        <p className="font-ls mb-2.5 mt-3.5  text-center text-gray-200">
          {letter.length}/{maxCharacterCount}
        </p>
        <Button className="font-md" onClick={handleSendButtonClick}>
          보내기
        </Button>
      </div>
    </div>
  )
}

export default LetterPage

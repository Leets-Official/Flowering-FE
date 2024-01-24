import { FlowerIcon } from '@/assets/Icons'
import { useState } from 'react'
import SentLetter from '@/pages/MyPage/components/SentLetter'
import ReceivedLetter from '@/pages/MyPage/components/ReceivedLetter'
import { Button } from '@/components'

interface LetterProps {
  sender?: string
  receiver?: string
  flowerId: number
  status: string
  dDay: string
}
const Letter = ({ receiver, dDay, flowerId, status, sender }: LetterProps) => {
  const currentDate = new Date()
  const dDayDate = new Date(dDay)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [sentModalOpen, setSentModalOpen] = useState<boolean>(false)
  const [receivedModalOpen, setReceivedModalOpen] = useState<boolean>(false)
  const openModal = () => {
    if (status === 'received' && currentDate < dDayDate) {
      setShowModal(true)
    } else if (status === 'received' && !showModal) {
      setReceivedModalOpen(true)
    } else {
      setSentModalOpen(true)
    }
  }
  const closeModal = () => {
    setSentModalOpen(false)
    setReceivedModalOpen(false)
    setShowModal(false)
  }

  return (
    <>
      <button
        className="font-xs mb-5 flex h-[115px] w-full shrink-0 bg-[#D9D9D9] pl-7"
        onClick={openModal}
      >
        <div className="flex flex-col gap-1 pt-5">
          <p className="mt-5">
            {status === 'received' ? 'FROM. ' : 'TO. '}
            {receiver}
            {sender}
          </p>
        </div>
        <div className="relative">
          <FlowerIcon className="absolute z-10 ml-14 mt-6" />
          <div className="absolute z-20 ml-32 h-full w-16 bg-white opacity-60 " />
        </div>
      </button>
      {sentModalOpen && (
        <SentLetter
          receiver={receiver}
          flowerId={flowerId}
          onClose={closeModal}
        />
      )}
      {receivedModalOpen && (
        <ReceivedLetter
          flowerId={flowerId}
          sender={sender}
          onClose={closeModal}
        />
      )}
      {showModal && (
        <div className="absolute left-0 top-0 z-50 flex h-full w-full backdrop-blur backdrop-blur-sm">
          <div className="mt-auto flex h-[230px] w-full flex-col rounded-t-[51px] bg-white px-8 pt-6">
            <p className="font-lg mt-10 text-center">
              {new Date(dDay).getMonth() + 1}월 {new Date(dDay).getDate()}일
              이후에 확인할 수 있어요.
            </p>
            <Button onClick={closeModal} size="lg" className="font-sm mt-16">
              닫기
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Letter

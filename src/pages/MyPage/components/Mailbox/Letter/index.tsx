import { useState } from 'react'
import SentLetter from '@/pages/MyPage/components/SentLetter'
import ReceivedLetter from '@/pages/MyPage/components/ReceivedLetter'
import { Button } from '@/components'
import { useGetFlower } from '@/apis/hooks'
import Purchase from '@/components/Purchase'

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
  const { data } = useGetFlower({ id: flowerId })
  const flowerName = data?.data.flowerType
  const openModal = () => {
    if (status === 'received' && currentDate > dDayDate) {
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
        className="font-xs relative mb-5 flex h-[120px] w-full shrink-0"
        onClick={openModal}
        style={{
          boxShadow:
            '0px -4px 10px rgba(0, 0, 0, 0.05), 0px 4px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <p className="mb-2 mt-auto flex flex-col gap-1 pl-3">
          {status === 'received' ? 'FROM. ' : 'TO. '}
          {receiver}
          {sender}
        </p>
        <div className="absolute right-0 mr-28 mt-[55px] flex items-center justify-center">
          <Purchase
            className="absolute h-[190px] w-[100px] rotate-[270deg] "
            name={flowerName}
          />
        </div>
        <div className="absolute z-20 ml-56 h-full w-16 bg-white opacity-60 drop-shadow-md" />
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

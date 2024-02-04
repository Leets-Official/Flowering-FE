import { useState } from 'react'
import SentLetter from '@/pages/MyPage/components/SentLetter'
import ReceivedLetter from '@/pages/MyPage/components/ReceivedLetter'
import { Button } from '@/components'
import { useGetFlower } from '@/apis/hooks'
import BigItem from '@/components/BigItem'
import { Error500Page, LoadingPage } from '@/pages'

interface LetterProps {
  sender?: string
  receiver?: string
  flowerId: number
  status: string
  dDay?: string
}
const Letter = ({ receiver, dDay, flowerId, status, sender }: LetterProps) => {
  const currentDate = new Date()
  const dDayDate = dDay ? new Date(dDay.replace(/-/g, '/')) : null
  const [showModal, setShowModal] = useState<boolean>(false)
  const [sentModalOpen, setSentModalOpen] = useState<boolean>(false)
  const [receivedModalOpen, setReceivedModalOpen] = useState<boolean>(false)
  const { data, isError, isLoading } = useGetFlower({ id: flowerId })
  const flowerName = data?.data.flowerType
  if (isLoading) <LoadingPage />
  if (isError) <Error500Page />
  const openModal = () => {
    if (status === 'received' && dDay && currentDate < dDayDate!) {
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
        <div className="absolute right-0 mr-[120px] mt-[55px] flex items-center justify-center">
          <BigItem
            className="absolute h-[195px] w-[100px] rotate-[270deg] "
            name={flowerName}
          />
        </div>
        <div className="absolute z-20 ml-[67%] h-full w-[63px] bg-white opacity-70 drop-shadow-md" />
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
        <div>
          <div className="absolute left-0 top-0 z-30 h-dvh w-full bg-gray-200 opacity-40" />
          <div className=" absolute left-0 top-0 z-50 flex h-full w-full backdrop-blur-sm">
            <div className="mt-auto flex h-[230px] w-full flex-col rounded-t-[51px] bg-white px-8 pt-6">
              {dDay && (
                <p className="font-lg mt-10 text-center">
                  {new Date(dDay.replace(/-/g, '/')).getMonth() + 1}월{' '}
                  {new Date(dDay.replace(/-/g, '/')).getDate()}일 이후에 확인할
                  수 있어요.
                </p>
              )}
              <Button onClick={closeModal} size="lg" className="font-sm mt-16">
                닫기
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Letter

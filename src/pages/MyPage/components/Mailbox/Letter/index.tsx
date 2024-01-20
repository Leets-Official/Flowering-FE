import { FlowerIcon } from '@/assets/Icons'
import { useState } from 'react'
import SentLetter from '@/pages/MyPage/components/SentLetter'
import ReceivedLetter from '@/pages/MyPage/components/ReceivedLetter'

interface ReceiverProps {
  receiver?: string
  flowerId: number
  status: string
}
const Letter = ({ receiver, flowerId, status }: ReceiverProps) => {
  console.log(status)
  const [sentModalOpen, setSentModalOpen] = useState<boolean>(false)
  const [receivedModalOpen, setReceivedModalOpen] = useState<boolean>(false)
  const openModal = () => {
    if (status === 'received') {
      setReceivedModalOpen(true)
    } else {
      setSentModalOpen(true)
    }
  }
  const closeModal = () => {
    setSentModalOpen(false)
    setReceivedModalOpen(false)
  }

  return (
    <>
      <button
        className="font-xs flex h-[115px] w-full shrink-0 bg-[#D9D9D9] pl-7"
        onClick={openModal}
      >
        <div className="flex flex-col gap-1 pt-5">
          <p className="w-3">01</p>
          <div className="h-[1.5px] w-3 bg-black" />
          <p className="w-3">13</p>
          <p className="mt-5">TO.{receiver}</p>
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
      {receivedModalOpen && <ReceivedLetter onClose={closeModal} />}
    </>
  )
}

export default Letter

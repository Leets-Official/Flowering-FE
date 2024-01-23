import { Header } from '@/components'
import { ICONS } from '@/constants'
import { useGetFlower } from '@/apis/hooks'

interface ReceivedLetterProps {
  sender: string
  flowerId: number
  onClose: () => void
}
const ReceivedLetter = ({ flowerId, sender, onClose }: ReceivedLetterProps) => {
  const { data } = useGetFlower({ id: flowerId })
  const letter = data?.data.letter

  return (
    <div className="absolute left-0 top-0 z-50 h-screen w-full transform overflow-hidden bg-white text-gray-300 transition-transform">
      <Header rightIcon={ICONS.CLOSE} onClose={onClose} />
      <div className="font-lg mx-7 mt-3 flex">
        <p className="text-gray-300">{sender}</p>
        <p className="text-gray-300">님이 보낸 편지에요</p>
      </div>
      <div className="font-ls mt-10 flex h-screen w-full flex-col rounded-t-[50px] bg-[#DADADA] px-7 pt-16">
        <p className="mb-10">{letter}</p>
        <p className="text-right">2024년 01월 16일</p>
      </div>
    </div>
  )
}

export default ReceivedLetter

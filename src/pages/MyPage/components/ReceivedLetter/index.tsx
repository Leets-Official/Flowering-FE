import { Header } from '@/components'
import { ICONS } from '@/constants'
import { useGetFlower } from '@/apis/hooks'
import BigItem from '@/components/BigItem'

interface ReceivedLetterProps {
  sender?: string
  flowerId: number
  onClose: () => void
}
const ReceivedLetter = ({ flowerId, sender, onClose }: ReceivedLetterProps) => {
  const { data } = useGetFlower({ id: flowerId })
  const letter = data?.data.letter
  const card = data?.data.cardType
  const flower = data?.data.flowerType
  const getImageUrl = () => {
    return new URL(`/src/assets/images/bigItems/${card}.png`, import.meta.url)
      .href
  }

  return (
    <div className="absolute left-0 top-0 z-50 h-screen w-full transform overflow-hidden bg-white text-gray-300 transition-transform">
      <Header rightIcon={ICONS.CLOSE} onClose={onClose} />
      <div className="font-lg mx-7 mt-3 flex">
        <p className="text-gray-300">{sender}</p>
        <p className="text-gray-300">님이 보낸 편지에요</p>
      </div>
      <div
        className={`font-ls s mt-10 flex h-screen w-full -translate-x-[1px] flex-col rounded-t-[75px] px-7 pt-16 `}
        style={{
          backgroundImage: `url(${getImageUrl()})`,
          backgroundSize: 'cover',
          boxShadow:
            '0px -4px 5px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p className="font-sm mb-10">{letter}</p>
        <BigItem
          className="absolute right-0 top-0 h-[330px] w-[231px] translate-x-[33px] rotate-[325deg] opacity-50"
          name={flower}
        />
      </div>
    </div>
  )
}

export default ReceivedLetter

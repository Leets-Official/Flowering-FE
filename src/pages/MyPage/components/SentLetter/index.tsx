import { Header } from '@/components'
import { ICONS } from '@/constants'
import { useGetFlower } from '@/apis/hooks'
import { Error500Page, LoadingPage } from '@/pages'
import { useState, useEffect, useCallback } from 'react'
import { Spinner } from '@material-tailwind/react'

interface SentLetterProps {
  receiver?: string
  flowerId: number
  onClose: () => void
}

const SentLetter = ({ flowerId, receiver, onClose }: SentLetterProps) => {
  const [backgroundLoading, setBackgroundLoading] = useState<boolean>(true)
  const { data, isError, isLoading } = useGetFlower({ id: flowerId })
  const letter = data?.data.letter
  const card = data?.data.cardType
  const getImageUrl = useCallback(() => {
    return new URL(`/src/assets/images/bigItems/${card}.png`, import.meta.url)
      .href
  }, [card])

  useEffect(() => {
    const imageUrl = getImageUrl()
    const img = new Image()
    img.src = imageUrl
    img.onload = () => {
      setBackgroundLoading(false)
    }
  }, [card, getImageUrl])

  if (isLoading) return <LoadingPage />
  if (isError) return <Error500Page />

  return (
    <div className="absolute left-0 top-0 z-50 h-dvh w-full transform overflow-hidden bg-white text-gray-300">
      <Header rightIcon={ICONS.CLOSE} onClose={onClose} />
      <div className="font-lg mx-7 mt-3 flex">
        <p className="text-gray-300">{receiver}</p>
        <p className="text-gray-300">님께 편지를 보냈어요.</p>
      </div>
      {backgroundLoading ? (
        <div className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-[100%]">
          <Spinner className="h-16 w-16 text-gray-600/50" />
        </div>
      ) : (
        <div
          className={`font-ls mt-10 flex h-dvh w-full -translate-x-[1px] flex-col rounded-t-[37px] px-7 pt-16 `}
          style={{
            backgroundImage: `url(${getImageUrl()})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow:
              '0px -4px 5px rgba(0, 0, 0, 0.1), 0px 0px 25px rgba(0, 0, 0, 0.1)',
            wordBreak: 'break-word',
          }}
        >
          <p className="font-sm mb-10">{letter}</p>
        </div>
      )}
    </div>
  )
}

export default SentLetter

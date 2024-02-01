import { Dispatch, SetStateAction } from 'react'
import { useGetFlower } from '@/apis/hooks'
import { CloseIcon } from '@/assets/Icons'

interface LetterProps {
  setLetterOpen: Dispatch<SetStateAction<boolean>>
  flowerId: number
}

const Letter = ({ setLetterOpen, flowerId }: LetterProps) => {
  const { data } = useGetFlower({ id: flowerId })

  console.log(data)
  const card = data?.data.cardType
  const letter = data?.data.letter
  const sender = data?.data.sender
  const flowerType = data?.data.flowerType

  const getImageUrl = (image: string) => {
    return new URL(`/src/assets/images/bigItems/${image}.png`, import.meta.url)
      .href
  }

  return (
    <>
      <div className="absolute -bottom-[5rem] z-[70] h-[95%] w-full animate-slide-up overflow-hidden rounded-t-[3.5rem]">
        <div
          className={`font-ls flex h-full w-full flex-col bg-cover bg-center px-6 py-20`}
          style={{
            backgroundImage: `url(${getImageUrl(card as string)})`,
            boxShadow:
              '0px -4px 5px rgba(6, 4, 4, 0.1), 0px 0px 25px rgba(0, 0, 0, 0.1)',
          }}
        >
          <CloseIcon
            className="absolute right-7 top-8 z-[80] h-4 w-4"
            onClick={() => setLetterOpen(false)}
          />
          <div className="absolute left-1/2 top-12 flex aspect-[154/220] w-[65vw] -translate-x-[15%] -translate-y-[5%] -rotate-[30deg] justify-center opacity-50 desktop:h-[220px] desktop:w-[154px]">
            <img
              src={getImageUrl(flowerType || '')}
              alt="flowerType"
              className="h-full"
            />
          </div>
          <div className="font-lg z-[80] flex">
            <span>{`${sender}`}</span>
            <span className="text-gray-300">님이 보낸 편지예요.</span>
          </div>
          <p className="font-sm z-[80] pt-10">{letter}</p>
        </div>
      </div>
      <div
        className="fixed left-0 top-0 z-[60] h-screen w-full bg-[#a8a8a8]/70 backdrop-blur-sm"
        onClick={() => setLetterOpen(false)}
      />
    </>
  )
}

export default Letter

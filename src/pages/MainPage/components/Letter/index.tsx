import { Dispatch, SetStateAction } from 'react'
import { useGetFlower } from '@/apis/hooks'
import { CloseIcon } from '@/assets/Icons'

interface LetterProps {
  setLetterOpen: Dispatch<SetStateAction<boolean>>
  flowerId: number
  dDay: string
  leftDay: number
  itsMe: boolean
}

const Letter = ({
  setLetterOpen,
  flowerId,
  dDay,
  leftDay,
  itsMe,
}: LetterProps) => {
  const { data } = useGetFlower({ id: flowerId })

  const card = data?.data.cardType
  const letter = data?.data.letter
  const sender = data?.data.sender
  const flowerType = data?.data.flowerType
  const [year, month, day] = dDay.split('-')

  const getImageUrl = (image: string) => {
    return new URL(`/src/assets/images/bigItems/${image}.png`, import.meta.url)
      .href
  }

  return (
    <>
      {itsMe ? (
        <div
          className={`animate-slide-up absolute -bottom-[5rem] z-[70] w-full overflow-hidden rounded-t-[3.5rem] ${leftDay <= 0 ? 'h-[95%]' : 'h-[45%]'}`}
        >
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
            {leftDay <= 0 && (
              <div className="absolute left-1/2 top-12 flex aspect-[154/220] w-[65vw] -translate-x-[5%] -translate-y-[5%] -rotate-[30deg] justify-center opacity-50 desktop:h-[220px] desktop:w-[154px]">
                <img
                  src={getImageUrl(flowerType || '')}
                  alt="flowerType"
                  className="h-full"
                />
              </div>
            )}
            <div
              className={`font-lg z-[80] flex ${leftDay > 0 && 'justify-center'}`}
            >
              <span>{`${sender}`}</span>
              <span className="text-gray-300">님이 보낸 편지예요.</span>
            </div>
            {leftDay <= 0 ? (
              <p className="font-sm z-[80] pt-10">{letter}</p>
            ) : (
              <p className="font-base z-[80] pt-2 text-center text-gray-200">{`${year}년 ${month}월 ${day}일에 볼 수 있어요.`}</p>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`animate-slide-up absolute -bottom-[5rem] z-[70] h-[40%] w-full overflow-hidden rounded-t-[3.5rem]`}
        >
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
            <div className={`font-lg z-[80] flex justify-center`}>
              <span>{`${sender}`}</span>
              <span className="text-gray-300">님이 보낸 편지예요.</span>
            </div>
          </div>
        </div>
      )}
      <div
        className="fixed left-0 top-0 z-[60] h-dvh w-full bg-[#a8a8a8]/70 backdrop-blur-sm"
        onClick={() => setLetterOpen(false)}
      />
    </>
  )
}

export default Letter

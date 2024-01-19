import { Carousel } from '@material-tailwind/react'
import { LeftArrowIcon, RightArrowIcon } from '@/assets/Icons'
import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

interface PrevArrowProps {
  loop: boolean
  handlePrev: () => void
  firstIndex: boolean
  activeIndex: number
}

interface NextArrowProps {
  loop: boolean
  handleNext: () => void
  lastIndex: boolean
  activeIndex: number
}

interface MerryGoRoundProps {
  setCurrentFlowerIndex: Dispatch<SetStateAction<number>>
}

const MerryGoRound = ({
  children,
  setCurrentFlowerIndex,
}: PropsWithChildren<MerryGoRoundProps>) => {
  return (
    <Carousel
      navigation={() => <div className="hidden" />}
      prevArrow={({
        handlePrev,
        firstIndex,
        loop,
        activeIndex,
      }: PrevArrowProps) => (
        <button
          onClick={() => {
            handlePrev()
            setCurrentFlowerIndex(activeIndex - 1)
          }}
          disabled={!loop && firstIndex}
          className="absolute left-4 top-[46%] z-20 transition-all disabled:pointer-events-none disabled:shadow-none"
        >
          <LeftArrowIcon
            className={`${
              !loop && firstIndex ? 'fill-gray-200' : 'fill-black'
            }`}
          />
        </button>
      )}
      nextArrow={({
        handleNext,
        lastIndex,
        loop,
        activeIndex,
      }: NextArrowProps) => (
        <button
          onClick={() => {
            handleNext()
            setCurrentFlowerIndex(activeIndex + 1)
          }}
          disabled={!loop && lastIndex}
          className="absolute right-4 top-[46%] z-20 transition-all disabled:pointer-events-none disabled:shadow-none"
        >
          <RightArrowIcon
            className={`${!loop && lastIndex ? 'fill-gray-200' : 'fill-black'}`}
          />
        </button>
      )}
    >
      {children}
    </Carousel>
  )
}

export default MerryGoRound

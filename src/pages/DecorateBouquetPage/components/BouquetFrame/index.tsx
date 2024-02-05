import {
  WrapperWhiteBackImage,
  WrapperWhiteFrontLeftImage,
  WrapperWhiteFrontRightImage,
  WrapperBlackBackImage,
  WrapperBlackFrontLeftImage,
  WrapperBlackFrontRightImage,
  FlowerCard,
} from '@/assets/images'
import { Ribbons } from '../'

interface BouquetFrameProps {
  currentWrapper: string
  currentRibbon: string
}

const BouquetFrame = ({ currentWrapper, currentRibbon }: BouquetFrameProps) => {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 z-[15] w-[60%] -translate-x-[56%] -translate-y-[11%]">
          {currentWrapper === 'white' ? (
            <WrapperWhiteFrontLeftImage className="h-full w-full" />
          ) : (
            <WrapperBlackFrontLeftImage className="h-full w-full" />
          )}
        </div>
        <div className="absolute left-1/2 top-1/2 z-30 w-[65%] -translate-x-[44%] -translate-y-[5%]">
          {currentWrapper === 'white' ? (
            <WrapperWhiteFrontRightImage className="h-full w-full" />
          ) : (
            <WrapperBlackFrontRightImage className="h-full w-full" />
          )}
          <Ribbons ribbon={currentRibbon} />
        </div>
        <div className="absolute left-1/2 top-1/2 z-40 flex w-[33%] -translate-x-[18%] translate-y-[75%] justify-center">
          <p className="font-xs absolute left-1/3 top-1/3  flex -translate-x-[45%] -translate-y-[20%] -rotate-[5deg] gap-px text-xs text-[#FFA6EE] sm:text-xs md:text-sm desktop:text-xs">
            <span>{`1 st`}</span>
          </p>
          <FlowerCard
            className={`h-[85%] w-[85%] ${currentWrapper === 'white' ? 'fill-white' : 'fill-black'}`}
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-[48%] -translate-y-[55%]">
        {currentWrapper === 'white' ? (
          <WrapperWhiteBackImage className="h-full w-full" />
        ) : (
          <WrapperBlackBackImage className="h-full w-full" />
        )}
      </div>
    </>
  )
}

export default BouquetFrame

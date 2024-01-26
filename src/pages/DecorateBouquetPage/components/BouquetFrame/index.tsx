import {
  WrapperWhiteBackImage,
  WrapperWhiteFrontLeftImage,
  WrapperWhiteFrontRightImage,
  WrapperBlackBackImage,
  WrapperBlackFrontLeftImage,
  WrapperBlackFrontRightImage,
} from '@/assets/images'
import { Ribbons } from '../'

interface BouquetFrameProps {
  currentWrapper: string
  currentRibbon: string
}

const BouquetFrame = ({ currentWrapper, currentRibbon }: BouquetFrameProps) => {
  const getCardImageUrl = (name: string) => {
    return new URL(`/src/assets/images/${name}.png`, import.meta.url).href
  }

  return (
    <>
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 z-[15] w-[60%] -translate-x-[55.5%] -translate-y-[11%]">
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
        <div className="absolute left-1/2 top-1/2 z-40 w-[33%] -translate-x-[18%] translate-y-[40%]">
          <p className="absolute left-1/3 top-1/3 flex  -translate-x-[75%] -translate-y-[10%] -rotate-[5deg] gap-px font-bodoni text-xs text-[#FFA6EE] sm:text-sm md:text-base desktop:text-sm">
            <span>{`1 st`}</span>
          </p>
          <img
            src={getCardImageUrl('flower_card')}
            alt="flower_card"
            className="w-full"
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

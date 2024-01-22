import { useLocation } from 'react-router'
import {
  WrapperBackImage,
  WrapperFrontLeftImage,
  WrapperFrontRightImage,
} from '@/assets/images'
import { Header } from '@/components'
import { Ribbons, FlowerFrame } from './components'

const DecorateBouquetPage = () => {
  const location = useLocation()
  const bouquetInfo = { ...location.state }

  console.log(bouquetInfo)

  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/${name}.png`, import.meta.url).href
  }

  return (
    <div className="relative h-full w-full">
      <Header leftIcon="GoBackIcon" />
      <div className="relative flex h-full w-full items-center justify-center">
        <FlowerFrame flowers={bouquetInfo[0]} />
        <div className="relative h-full w-[70%]">
          <div className="absolute left-1/2 top-1/2 z-[15] w-full -translate-x-[60.5%] -translate-y-[32%]">
            <WrapperFrontLeftImage className="h-full w-full" />
          </div>
          <div className="absolute left-1/2 top-1/2 z-30 w-full -translate-x-[48.5%] -translate-y-[16%]">
            <WrapperFrontRightImage className="h-full w-full" />
            <Ribbons ribbon={bouquetInfo.bouquetDesign.ribbon} />
          </div>
          <div className="absolute left-1/2 top-1/2 z-40 w-[45%] -translate-x-[20%] translate-y-[35%]">
            <p className="absolute left-1/3 top-1/3 flex  -translate-x-[75%] -translate-y-[15%] -rotate-[5deg] gap-px font-bodoni text-xs text-[#FFA6EE] sm:text-sm md:text-base desktop:text-sm">
              <span>{`1 st`}</span>
            </p>
            <img
              src={getImageUrl('flower_card')}
              alt="flower_card"
              className="w-full"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-[48%] -translate-y-[62%]">
          <WrapperBackImage className="h-full w-full" />
        </div>
      </div>
    </div>
  )
}

export default DecorateBouquetPage

import { Button } from '@/components'
import { FlowerFrame, MarryGoRound, Ribbons } from '../'
import { getLeftDays } from '@/utils'
import { useState, useMemo } from 'react'
import {
  WrapperBackImage,
  WrapperFrontLeftImage,
  WrapperFrontRightImage,
} from '@/assets/images'
import type { BouquetInfo } from '@/types'

interface CreatedBouquetProps {
  bouquetInfo: BouquetInfo
}

const CreatedBouquet = ({ bouquetInfo }: CreatedBouquetProps) => {
  const [currentFlowerIndex, setCurrentFlowerIndex] = useState<number>(0)

  const ordinalNum = ['st', 'nd', 'rd']

  const leftDays = useMemo(
    () => getLeftDays(bouquetInfo.dDay || ''),
    [bouquetInfo.dDay],
  )

  const flowers = useMemo(
    () =>
      bouquetInfo.bouquets.reduce(
        (acc, bouquet) => acc + bouquet.flowers.length,
        0,
      ),
    [bouquetInfo.bouquets],
  )

  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/${name}.png`, import.meta.url).href
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-1.5 px-6">
        <div className="font-base flex justify-between text-gray-300">
          <h2>{bouquetInfo.description}</h2>
          <h2>{`D-${leftDays}`}</h2>
        </div>
        <h1>
          <span className="font-lg">{`꽃송이  `}</span>
          <span className="font-xl">{flowers}</span>
          <span className="font-lg">{`개 째`}</span>
        </h1>
      </div>
      <div className="relative h-full w-full">
        <MarryGoRound setCurrentFlowerIndex={setCurrentFlowerIndex}>
          {bouquetInfo.bouquets.map(
            (bouquet) =>
              bouquet.flowers.length > 0 && (
                <div
                  key={bouquet.bouquetId}
                  className="relative flex h-full w-full items-center justify-center"
                >
                  <FlowerFrame flowers={bouquet.flowers} />
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
                        <span>{currentFlowerIndex + 1}</span>
                        <span>
                          {ordinalNum[currentFlowerIndex]
                            ? ordinalNum[currentFlowerIndex]
                            : 'th'}
                        </span>
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
              ),
          )}
        </MarryGoRound>
      </div>
      <footer className="absolute bottom-0 z-30 flex h-[5rem] w-full shrink-0 items-center justify-center px-6">
        <Button className="w-full bg-[#d9d9d9] text-black">링크 복사</Button>
      </footer>
    </div>
  )
}

export default CreatedBouquet

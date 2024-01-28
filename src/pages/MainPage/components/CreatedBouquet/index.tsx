import {
  WrapperBlackFrontLeftImage,
  WrapperWhiteBackImage,
  WrapperWhiteFrontLeftImage,
  WrapperWhiteFrontRightImage,
  WrapperBlackFrontRightImage,
  WrapperBlackBackImage,
} from '@/assets/images'
import { Button } from '@/components'
import { FlowerFrame, MarryGoRound, Ribbons, ItemFrame } from '../'
import { getLeftDays } from '@/utils'
import { useState, useMemo } from 'react'
import type { BouquetInfo } from '@/types'

interface CreatedBouquetProps {
  bouquetInfo: BouquetInfo
}

const CreatedBouquet = ({ bouquetInfo }: CreatedBouquetProps) => {
  const [currentFlowerIndex, setCurrentFlowerIndex] = useState<number>(0)

  const { wrapper, ribbon, item1, item2, item3 } = bouquetInfo.bouquetDesign
  const ordinalNum = ['st', 'nd', 'rd']
  console.log(wrapper, ribbon)

  const leftDays = useMemo(
    () => getLeftDays(bouquetInfo.dDay || ''),
    [bouquetInfo.dDay],
  )

  const flowerCount = useMemo(
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
          <span className="font-xl">{flowerCount}</span>
          <span className="font-lg">{`개 째`}</span>
        </h1>
      </div>
      <div className="relative h-full w-full">
        {flowerCount === 0 ? (
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="relative h-full w-full">
              <div className="absolute left-1/3 top-1/2 z-[15] w-[56%] -translate-x-[33%] -translate-y-[18%]">
                {wrapper === 'white' ? (
                  <WrapperWhiteFrontLeftImage className="h-full w-full" />
                ) : (
                  <WrapperBlackFrontLeftImage className="h-full w-full" />
                )}
              </div>
              <div className="absolute left-1/2 top-1/2 z-30 w-[66%] -translate-x-[47.5%] -translate-y-[15.5%]">
                {wrapper === 'white' ? (
                  <WrapperWhiteFrontRightImage className="h-full w-full" />
                ) : (
                  <WrapperBlackFrontRightImage className="h-full w-full" />
                )}

                <Ribbons ribbon={ribbon} />
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
              {wrapper === 'white' ? (
                <WrapperWhiteBackImage className="h-full w-full" />
              ) : (
                <WrapperBlackBackImage className="h-full w-full" />
              )}
            </div>
          </div>
        ) : (
          <MarryGoRound setCurrentFlowerIndex={setCurrentFlowerIndex}>
            {bouquetInfo.bouquets.map(
              (bouquet) =>
                bouquet.flowers.length > 0 && (
                  <div
                    key={bouquet.bouquetId}
                    className="relative flex h-full w-full items-center justify-center overflow-hidden"
                  >
                    <FlowerFrame flowers={bouquet.flowers} />
                    <div className="relative h-full w-full">
                      <div className="absolute left-1/3 top-1/2 z-[15] w-[56%] -translate-x-[33%] -translate-y-[18%]">
                        {wrapper === 'white' ? (
                          <WrapperWhiteFrontLeftImage className="h-full w-full" />
                        ) : (
                          <WrapperBlackFrontLeftImage className="h-full w-full" />
                        )}
                      </div>
                      <div className="absolute left-1/2 top-1/2 z-30 w-[66%] -translate-x-[47.5%] -translate-y-[15.5%]">
                        {wrapper === 'white' ? (
                          <WrapperWhiteFrontRightImage className="h-full w-full" />
                        ) : (
                          <WrapperBlackFrontRightImage className="h-full w-full" />
                        )}

                        <Ribbons ribbon={ribbon} />
                      </div>
                      <div className="absolute left-1/2 top-1/2 z-40 w-[45%] -translate-x-[10%] translate-y-[31%]">
                        <p className="absolute left-[25%] top-1/3 flex -translate-x-[85%] -translate-y-[15%] -rotate-[5deg] gap-px font-bodoni text-xs text-[#FFA6EE] sm:text-sm md:text-base desktop:text-sm">
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
                          className="w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-[50%] -translate-y-[62%]">
                      {wrapper === 'white' ? (
                        <WrapperWhiteBackImage className="h-full w-full" />
                      ) : (
                        <WrapperBlackBackImage className="h-full w-full" />
                      )}
                    </div>
                    <ItemFrame
                      currentItem1={item1}
                      currentItem2={item2}
                      currentItem3={item3}
                    />
                  </div>
                ),
            )}
          </MarryGoRound>
        )}
      </div>
      <footer className="absolute bottom-0 z-30 flex h-[5rem] w-full shrink-0 items-center justify-center px-6">
        <Button className="w-full bg-[#d9d9d9] text-black">링크 복사</Button>
      </footer>
    </div>
  )
}

export default CreatedBouquet

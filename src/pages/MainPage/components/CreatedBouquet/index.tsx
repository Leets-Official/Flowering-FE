import { Button } from '@/components'
import { FlowerFrame, MarryGoRound } from '../'
import { getLeftDays } from '@/utils'
import { useState } from 'react'
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
  console.log(currentFlowerIndex)

  const leftDays = getLeftDays(bouquetInfo.dDay || '')

  const flowers = bouquetInfo.bouquets.reduce(
    (acc, bouquet) => acc + bouquet.flowers.length,
    0,
  )

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
          {bouquetInfo.bouquets.map((bouquet) => (
            <div
              key={bouquet.bouquetId}
              className="relative flex h-full w-full items-center justify-center"
            >
              <FlowerFrame flowers={bouquet.flowers} />
              <div className="relative h-full w-[70%]">
                <div className="absolute left-1/2 top-1/2 z-[15] w-full -translate-x-[61.8%] -translate-y-[28%]">
                  <WrapperFrontLeftImage className="h-full w-full" />
                </div>
                <div className="absolute left-1/2 top-1/2 z-30 w-full -translate-x-[50%] -translate-y-[13%]">
                  <WrapperFrontRightImage className="h-full w-full" />
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-1/2 -translate-y-[62%]">
                <WrapperBackImage className="h-full w-full" />
              </div>
            </div>
          ))}
        </MarryGoRound>
      </div>
      <footer className="absolute bottom-0 z-30 flex h-[5rem] w-full shrink-0 items-center justify-center px-6">
        <Button className="w-full bg-[#d9d9d9] text-black">링크 복사</Button>
      </footer>
    </div>
  )
}

export default CreatedBouquet

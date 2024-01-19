import { Button } from '@/components'
import { FlowerFrame, MarryGoRound } from '../'
import { getLeftDays } from '@/utils'
import { useState } from 'react'
import { WrapperFrontImage, WrapperBackImage } from '@/assets/images'

interface Flower {
  flowerId?: number
  sender?: string
  flowerType: string
}
interface BouquetInfo {
  description: string | null
  dday: string | null
  bouquetDesign: {
    wrapper: string
    ribbon: string
    item1: string | undefined
    item2: string | undefined
    item3: string | undefined
  }
  bouquets: {
    bouquetId: number
    flowers: Flower[]
  }[]
}

interface CreatedBouquetProps {
  userName: string
  data: BouquetInfo
}

const CreatedBouquet = ({ userName, data }: CreatedBouquetProps) => {
  const [currentFlowerIndex, setCurrentFlowerIndex] = useState<number>(0)
  console.log(currentFlowerIndex)

  const leftDays = getLeftDays(data.dday || '')

  // const getImageUrl = (name: string) => {
  //   return new URL(`/src/assets/images/wrapping/${name}.png`, import.meta.url)
  //     .href
  // }

  const flowers = data.bouquets.reduce(
    (acc, bouquet) => acc + bouquet.flowers.length,
    0,
  )

  // const leftWrapper = getImageUrl('left_wrapping')
  // const rightWrapper = getImageUrl('right_wrapping')

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-1.5 px-6">
        <div className="font-base flex justify-between text-gray-300">
          <h2>{`${userName} 졸업합니다.`}</h2>
          <h2>{`D-${leftDays}`}</h2>
        </div>
        <h1>
          <span className="font-lg">{`꽃송이 `}</span>
          <span className="font-xl">{flowers}</span>
          <span className="font-lg">{`개 째`}</span>
        </h1>
      </div>
      <div className="relative h-full w-full ">
        <MarryGoRound setCurrentFlowerIndex={setCurrentFlowerIndex}>
          {data.bouquets.map((bouquet) => (
            <div key={bouquet.bouquetId} className="relative h-full w-full">
              <div className="absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-1/2 -translate-y-[60%]">
                <WrapperBackImage className="h-full w-full" />
              </div>
              <FlowerFrame flowers={bouquet.flowers} />
              <div className="absolute left-1/2 top-1/2 z-20 w-[70%] -translate-x-1/2 -translate-y-[15%]">
                <WrapperFrontImage className="h-full w-full object-contain" />
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

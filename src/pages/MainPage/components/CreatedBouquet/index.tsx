import { Button } from '@/components'
import { FlowerFrame, MarryGoRound } from '../'
import { getLeftDays } from '@/utils'
import { useState } from 'react'

interface BouquetInfo {
  description: string
  dday: string
  bouquetDesign: {
    wrapper: string
    ribbon: string
    item1: string
    item2: string
    item3: string
  }
  bouquets: {
    bouquetId: number
    flowers: {
      flowerId: number
      sender: string
      flowerType: string
    }[]
  }[]
}

interface CreatedBouquetProps {
  userName: string
  data: BouquetInfo
}

const CreatedBouquet = ({ userName, data }: CreatedBouquetProps) => {
  const [currentFlowerIndex, setCurrentFlowerIndex] = useState<number>(0)
  console.log(currentFlowerIndex)

  const leftDays = getLeftDays(data.dday)

  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/wrapping/${name}.png`, import.meta.url)
      .href
  }

  const flowers = data.bouquets.reduce(
    (acc, bouquet) => acc + bouquet.flowers.length,
    0,
  )

  const leftWrapper = getImageUrl('left_wrapping')
  const rightWrapper = getImageUrl('right_wrapping')
  const backWrapper = getImageUrl('back_wrapping')

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
      <div className="absolute bottom-0 z-0 h-[63vh] w-full desktop:h-[500px]">
        <img src={backWrapper} alt="wrapper-back" className="w-full" />
      </div>
      <MarryGoRound setCurrentFlowerIndex={setCurrentFlowerIndex}>
        {data.bouquets.map((bouquet) => (
          <FlowerFrame flowers={bouquet.flowers} key={bouquet.bouquetId} />
        ))}
      </MarryGoRound>
      <div className="absolute bottom-0 right-0 z-20 aspect-[1.25/1] h-[37vh] desktop:h-[220px]">
        <img src={rightWrapper} alt="wrapper-right" className="h-full" />
      </div>
      <div className="absolute bottom-0 z-20 aspect-[1.25/1] h-[30vh] desktop:h-[190px]">
        <img src={leftWrapper} alt="wrapper-left" className="h-full" />
      </div>
      <footer className="absolute bottom-0 z-30 flex h-[5rem] w-full shrink-0 items-center justify-center px-6">
        <Button className="w-full bg-[#d9d9d9] text-black">링크 복사</Button>
      </footer>
    </div>
  )
}

export default CreatedBouquet

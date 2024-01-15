import { Sidebar, Header, Button } from '@/components'
import { useState } from 'react'
import { ICONS } from '@/constants'
import { getLeftDays } from '@/utils'
import { FlowerFrame } from './components'

const userName = '김주하'
const graduationDate = '2024-02-12'
const data = {
  bouquetDesign: {
    wrapper: 'pink',
    ribbon: 'red',
    item1: 'butterfly',
    item2: 'grass',
    item3: 'badge',
  },
  bouquets: [
    {
      bouquetId: 201,
      flowers: [
        { flowerId: 123, sender: '발신인1', flowerType: 'flower1' },
        { flowerId: 243, sender: '발신인2', flowerType: 'flower1' },
        { flowerId: 301, sender: '발신인3', flowerType: 'flower1' },
        { flowerId: 423, sender: '발신인4', flowerType: 'flower1' },
        { flowerId: 543, sender: '발신인5', flowerType: 'flower1' },
      ],
    },
    {
      bouquetId: 204,
      flowers: [
        { flowerId: 165, sender: '발신인6', flowerType: 'flower4' },
        { flowerId: 276, sender: '발신인7', flowerType: 'flower5' },
        { flowerId: 376, sender: '발신인8', flowerType: 'flower6' },
        { flowerId: 476, sender: '발신인9', flowerType: 'flower7' },
        { flowerId: 576, sender: '발신인10', flowerType: 'flower8' },
      ],
    },
  ],
}

const MainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const leftDays = getLeftDays(graduationDate)

  const flowers = data.bouquets.reduce(
    (acc, bouquet) => acc + bouquet.flowers.length,
    0,
  )

  return (
    <>
      <main className="flex h-screen flex-col">
        <Header
          leftIcon={ICONS.DRAW}
          rightIcon={ICONS.SIDEBAR}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex h-full flex-col px-6">
          <div className="flex flex-col gap-1.5 ">
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
          <FlowerFrame flowers={data.bouquets[1].flowers} />
          <footer className="flex h-[5rem] shrink-0 items-center justify-center">
            <Button className="w-full bg-[#d9d9d9] text-black">
              링크 복사
            </Button>
          </footer>
        </div>
      </main>
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}

export default MainPage

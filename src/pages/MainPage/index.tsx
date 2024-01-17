import { Sidebar, Header } from '@/components'
import { useState } from 'react'
import { ICONS } from '@/constants'
import { CreatedBouquet } from './components'

const userName = '김주하'
const data = {
  description: '',
  dday: '2024-02-12',
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
        { flowerId: 165, sender: '발신인6', flowerType: 'flower12' },
        { flowerId: 276, sender: '발신인7', flowerType: 'flower5' },
        { flowerId: 376, sender: '발신인8', flowerType: 'flower6' },
        { flowerId: 476, sender: '발신인9', flowerType: 'flower7' },
        { flowerId: 576, sender: '발신인10', flowerType: 'flower8' },
      ],
    },
    {
      bouquetId: 20224,
      flowers: [
        { flowerId: 1365, sender: '발신인11', flowerType: 'flower4' },
        { flowerId: 2176, sender: '발신인12', flowerType: 'flower4' },
        { flowerId: 3376, sender: '발신인13', flowerType: 'flower4' },
        { flowerId: 4736, sender: '발신인14', flowerType: 'flower4' },
      ],
    },
  ],
}

const MainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <>
      <main className="flex h-screen flex-col">
        <Header
          leftIcon={ICONS.DRAW}
          rightIcon={ICONS.SIDEBAR}
          setSidebarOpen={setSidebarOpen}
        />
        {data.description && data.dday ? (
          <CreatedBouquet userName={userName} data={data} />
        ) : (
          <></>
        )}
      </main>
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}

export default MainPage

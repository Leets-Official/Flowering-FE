import { Sidebar, Header } from '@/components'
import { useState } from 'react'
import { ICONS } from '@/constants'
import { getLeftDays } from '@/utils'
import { WrapperFront } from '@/assets/images'

const userName = '김주하'
const graduationDate = '2024-02-12'
const flowers = 0

const MainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const leftDays = getLeftDays(graduationDate)

  return (
    <>
      <main>
        <Header
          leftIcon={ICONS.DRAW}
          rightIcon={ICONS.SIDEBAR}
          setSidebarOpen={setSidebarOpen}
        />
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
        <WrapperFront className="w-full" />
      </main>
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}

export default MainPage

import { Sidebar } from '@/components'
import { useState } from 'react'

const MainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleCloseSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <section className="desktop:w-[375px]">
      <div
        className={`${sidebarOpen ? 'h-screen bg-gray-200 backdrop-blur' : ''}`}
      >
        <div className={`flex ${sidebarOpen ? 'h-screen blur-sm' : ''}`}>
          <h1>MainPage</h1>
          <button className="ml-auto" onClick={handleSidebarToggle}>
            사이드바
          </button>
          {sidebarOpen && (
            <div
              className="fixed left-0 top-0 z-40 h-screen w-full blur"
              onClick={handleCloseSidebar}
            />
          )}
        </div>
        <div className="relative">
          <Sidebar isOpen={sidebarOpen} />
        </div>
      </div>
    </section>
  )
}

export default MainPage

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
    <>
      <div
        className={`flex h-screen ${sidebarOpen ? 'bg-gray-200 blur-sm' : ''}`}
      >
        <h1>MainPage</h1>
        <button className="fixed right-0" onClick={handleSidebarToggle}>
          사이드바
        </button>
        {sidebarOpen && (
          <div
            className="fixed left-0 top-0 z-40 h-full w-full"
            onClick={handleCloseSidebar}
          ></div>
        )}
      </div>
      <Sidebar isOpen={sidebarOpen} />
    </>
  )
}

export default MainPage

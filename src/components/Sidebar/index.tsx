import Box from '@/components/Sidebar/Box'
import { Dispatch, SetStateAction } from 'react'

interface SidebarProps {
  isOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ isOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <>
      <div
        className={`absolute -right-[345px] top-0 z-50 h-screen duration-300 ${
          isOpen && '-translate-x-full transform'
        }`}
      >
        {isOpen && <Box />}
      </div>
      {isOpen && (
        <div
          className="absolute left-0 top-0 z-40 h-screen w-full bg-[#a8a8a8] opacity-70 backdrop-blur"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar

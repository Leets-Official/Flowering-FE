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
        className={`absolute -right-[345px] top-0 z-50 h-dvh duration-300 ${
          isOpen && '-translate-x-full transform'
        }`}
      >
        {isOpen && <Box />}
      </div>
      {isOpen && (
        <div
          className="absolute left-0 top-0 z-40 h-dvh w-full bg-[#a8a8a8]/10 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar

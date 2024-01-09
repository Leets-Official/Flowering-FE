import Box from '@/components/Sidebar/Box'

interface SidebarProps {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div
      className={`w-50 fixed -right-[340px] top-0 z-50 h-screen duration-300 ${
        isOpen ? '-translate-x-full transform' : ''
      }`}
    >
      <Box />
    </div>
  )
}

export default Sidebar

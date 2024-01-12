import { HomeIcon, SideBarIcon } from '@/assets/Icons'
import { useNavigate } from 'react-router-dom'

interface Icon {
  name: string
}
interface HeaderProps {
  icons: Icon[]
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>
  position: 'left' | 'right' | 'both'
}

const Header = ({ icons, setSidebarOpen, position }: HeaderProps) => {
  const navigate = useNavigate()
  const iconEventHandlers: Record<string, () => void> = {
    HomeIcon: () => navigate('/'),
    SidebarIcon: () => {
      if (setSidebarOpen) {
        setSidebarOpen((prev) => !prev)
      }
    },
    // 다른 아이콘 event 추가
  }
  const iconPosition =
    position === 'right'
      ? 'ml-auto'
      : position === 'left'
        ? 'mr-auto'
        : 'justify-between'

  return (
    <div className={`${iconPosition} mx-8 mt-5 flex items-center`}>
      {icons.map((icon, index) => (
        <div
          key={index}
          onClick={() =>
            iconEventHandlers[icon.name] && iconEventHandlers[icon.name]()
          }
          className="cursor-pointer"
        >
          {icon.name === 'HomeIcon' && <HomeIcon />}
          {icon.name === 'SidebarIcon' && <SideBarIcon />}
          {/* 다른 아이콘 추가할때 위에 참고해서 똑같이 추가하면 됩니다! */}
        </div>
      ))}
    </div>
  )
}

export default Header

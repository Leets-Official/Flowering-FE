import {
  GoBackIcon,
  CloseIcon,
  DrawIcon,
  HomeIcon,
  SidebarIcon,
} from '@/assets/Icons'
import { useNavigate } from 'react-router-dom'
import { Dispatch, SetStateAction } from 'react'
import { ICONS } from '@/constants'

interface HeaderProps {
  leftIcon?: string
  rightIcon?: string
  setSidebarOpen?: Dispatch<SetStateAction<boolean>>
  onClose?: () => void
  onGoBack?: () => void
  onDecoBouquet?: () => void
}

const icons = {
  [ICONS.HOME]: <HomeIcon />,
  [ICONS.SIDEBAR]: <SidebarIcon />,
  [ICONS.DRAW]: <DrawIcon />,
  [ICONS.GOBACK]: <GoBackIcon />,
  [ICONS.CLOSE]: <CloseIcon />,
  // 다른 아이콘 추가할때 위에 참고해서 똑같이 추가하면 됩니다!
}

const Header = ({
  leftIcon,
  rightIcon,
  setSidebarOpen,
  onClose,
  onGoBack,
  onDecoBouquet,
}: HeaderProps) => {
  const navigate = useNavigate()

  const iconEventHandlers: Record<string, () => void> = {
    [ICONS.HOME]: () => navigate('/'),
    [ICONS.SIDEBAR]: () => setSidebarOpen && setSidebarOpen((prev) => !prev),
    [ICONS.DRAW]: onDecoBouquet || (() => navigate('/decorate-bouquet')),
    [ICONS.CLOSE]: onClose || (() => navigate(-1)),
    [ICONS.GOBACK]: onGoBack || (() => navigate(-1)),
    // 다른 아이콘 event 추가
  }

  return (
    <header
      className={`sticky flex items-center justify-between px-6 pb-5 pt-3`}
    >
      {leftIcon ? (
        <div className="cursor-pointer" onClick={iconEventHandlers[leftIcon]}>
          {icons[leftIcon]}
        </div>
      ) : (
        <div></div>
      )}
      {rightIcon ? (
        <div className="cursor-pointer" onClick={iconEventHandlers[rightIcon]}>
          {icons[rightIcon]}
        </div>
      ) : (
        <div></div>
      )}
    </header>
  )
}

export default Header

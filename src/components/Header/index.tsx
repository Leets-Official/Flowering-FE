import { DrawIcon, GoBackIcon, HomeIcon, SidebarIcon } from '@/assets/Icons'
import { useNavigate } from 'react-router-dom'
import { Dispatch, SetStateAction } from 'react'
import { ICONS } from '@/constants'

interface HeaderProps {
  leftIcon?: string
  rightIcon?: string
  setSidebarOpen?: Dispatch<SetStateAction<boolean>>
}

const icons = {
  [ICONS.HOME]: <HomeIcon />,
  [ICONS.SIDEBAR]: <SidebarIcon />,
  [ICONS.DRAW]: <DrawIcon />,
  [ICONS.GOBACK]: <GoBackIcon />,
  // 다른 아이콘 추가할때 위에 참고해서 똑같이 추가하면 됩니다!
}

const Header = ({ leftIcon, rightIcon, setSidebarOpen }: HeaderProps) => {
  const navigate = useNavigate()

  const iconEventHandlers: Record<string, () => void> = {
    [ICONS.HOME]: () => navigate('/'),
    [ICONS.SIDEBAR]: () => setSidebarOpen && setSidebarOpen((prev) => !prev),
    [ICONS.DRAW]: () => navigate('/'), // TODO: 꽃다발 꾸미기 페이지 이동으로 수정하기
    // 다른 아이콘 event 추가
    [ICONS.GOBACK]: () => navigate(-1),
  }

  return (
    <header className={`flex items-center justify-between px-6 pb-5 pt-3`}>
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

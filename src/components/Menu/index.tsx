import { useState } from 'react'
import Box from '@/components/Menu/Box'

const Menu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const menuHandler = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div>
      <button onClick={menuHandler}>메뉴버튼</button>
      {showMenu && <Box />}
    </div>
  )
}

export default Menu

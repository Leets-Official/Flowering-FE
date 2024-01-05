import { PropsWithChildren } from 'react'

interface MenuProps extends PropsWithChildren {
  className?: string
}

const Menu = ({ className = '', children }: MenuProps) => {
  return (
    <ul
      tabIndex={0}
      className={`menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow ${className}`}
    >
      {children}
    </ul>
  )
}

export default Menu

import { PropsWithChildren } from 'react'

interface MenuProps extends PropsWithChildren {
  className?: string
}

const Menu = ({ className = '', children }: MenuProps) => {
  return (
    <ul
      tabIndex={0}
      className={`menu dropdown-content rounded-box bg-base-100 z-[1] max-h-[100px] w-10 overflow-y-auto p-2 shadow ${className}`}
    >
      {children}
    </ul>
  )
}

export default Menu

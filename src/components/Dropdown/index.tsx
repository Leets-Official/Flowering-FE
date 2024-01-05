import { PropsWithChildren } from 'react'
import Toggle from './Toggle'
import Menu from './Menu/index'
import Item from './Item/index'

interface DropdownProps extends PropsWithChildren {
  className?: string
}

const Dropdown = ({ className = '', children }: DropdownProps) => {
  return <div className={`dropdown ${className}`}>{children}</div>
}

Dropdown.Toggle = Toggle
Dropdown.Menu = Menu
Dropdown.Item = Item

export default Dropdown

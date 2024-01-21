import { PropsWithChildren, HTMLAttributes } from 'react'

interface ItemProps
  extends PropsWithChildren<HTMLAttributes<HTMLAnchorElement>> {
  className?: string
}

const Item = ({ className = '', children, ...props }: ItemProps) => {
  return (
    <li tabIndex={0} className={`${className}`}>
      <a {...props}>{children}</a>
    </li>
  )
}

export default Item

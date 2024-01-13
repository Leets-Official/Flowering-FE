import { useState, cloneElement, ReactElement, Children } from 'react'
import Contents from './Contents'

interface ModalProps {
  children?: ReactElement[]
}

const Modal = ({ children }: ModalProps) => {
  const toggle = children?.find((child) => child.key === 'toggle')
  const contents = children?.filter((child) => child.key !== 'toggle')
  const [open, setOpen] = useState(false)

  const onClick = () => setOpen(!open)

  return (
    <>
      {toggle &&
        Children.map(toggle, (child: ReactElement<{ onClick: () => void }>) =>
          cloneElement(child, { onClick }),
        )}
      {contents && (
        <Contents open={open} onClick={onClick}>
          {contents}
        </Contents>
      )}
    </>
  )
}

export default Modal

import { ReactNode } from 'react'
import Toggle from './Toggle'
import Content from './Content'

interface ModalProps {
  children?: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  return <div>{children}</div>
}

Modal.Toggle = Toggle
Modal.Content = Content

export default Modal

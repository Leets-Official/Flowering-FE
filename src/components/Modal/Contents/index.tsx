import { Dialog } from '@material-tailwind/react'
import { CloseIcon } from '@/assets/Icons'
import { ReactElement } from 'react'

interface ContentsProps {
  children?: ReactElement[]
  open: boolean
  onClick: () => void
}

const Contents = ({ children, open, onClick: handleClose }: ContentsProps) => {
  const button = children?.find((child) => child.key === 'btn')
  const content = children?.filter((child) => child.key === 'content')

  return (
    <Dialog
      open={open}
      handler={handleClose}
      className="flex flex-col items-center justify-center gap-3 rounded-[3.125rem] px-12 py-6"
    >
      <CloseIcon
        className="absolute left-7 top-7 cursor-pointer"
        onClick={handleClose}
      />
      {content}
      {button && <span onClick={handleClose}>{button}</span>}
    </Dialog>
  )
}

export default Contents

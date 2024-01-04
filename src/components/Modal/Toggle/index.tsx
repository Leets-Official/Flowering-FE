import { PropsWithChildren } from 'react'

interface ToggleProps {
  className?: string
  id: string
}

const Toggle = ({
  children,
  className,
  id,
}: PropsWithChildren<ToggleProps>) => {
  return (
    <button
      className={`btn w-fit border-[#9747FF] bg-[#F8E1FE] ${className}`}
      onClick={() =>
        (document.getElementById(id) as HTMLDialogElement).showModal()
      }
    >
      {children}
    </button>
  )
}

export default Toggle

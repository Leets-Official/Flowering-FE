import { PropsWithChildren } from 'react'

interface ToggleProps extends PropsWithChildren {
  className?: string
}

const Toggle = ({ className = '', children }: ToggleProps) => {
  return (
    <div tabIndex={0} role="button" className={`${className} btn m-1`}>
      {children}
    </div>
  )
}

export default Toggle

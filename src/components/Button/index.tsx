import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

const Button = ({
  children,
  type = 'submit',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...props}
      className={`rounded-md bg-black px-4 py-2 text-xs text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

const Button = ({ children, type = 'submit', ...props }: ButtonProps) => {
  return (
    <button type={type} {...props} className="rounded-md bg-pink-200 px-4 py-2">
      {children}
    </button>
  )
}

export default Button

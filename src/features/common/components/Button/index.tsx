import { type ButtonHTMLAttributes } from 'react'
import { base, variants, sizes } from './Button.css'
import { clsx } from 'clsx'
import { type ButtonVariant, type ButtonSize } from './type'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      type='button'
      {...props}>
      {children}
    </button>
  )
}

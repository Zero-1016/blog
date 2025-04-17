import { type ButtonHTMLAttributes } from 'react'
import { buttonRecipe, type ButtonProps } from './style.css'
import { clsx } from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}: Props) => {
  return (
    <button
      className={clsx(buttonRecipe({ variant, size }), className)}
      type='button'
      {...props}>
      {children}
    </button>
  )
}

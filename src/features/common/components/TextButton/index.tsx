import { type ButtonHTMLAttributes } from 'react'
import { textButtonRecipe, type TextButtonProps } from './style.css'
import { clsx } from 'clsx'
import { TextButtonContextProvider } from './context'
import { TextButtonTxt } from './compound/Txt'
import { TextButtonIcon } from './compound/Icon'
type TextButtonImplProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TextButtonProps & {
    leftAddon?: React.ReactNode
    rightAddon?: React.ReactNode
  }

const TextButtonImpl = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  leftAddon,
  rightAddon,
  fit = false,
  ...props
}: TextButtonImplProps) => {
  const hasAddon = !!leftAddon || !!rightAddon

  return (
    <TextButtonContextProvider
      size={size}
      variant={variant}>
      <button
        className={clsx(textButtonRecipe({ variant, size, hasAddon, fit }), className)}
        type='button'
        {...props}>
        {leftAddon && leftAddon}
        {children}
        {rightAddon && rightAddon}
      </button>
    </TextButtonContextProvider>
  )
}

export const TextButton = Object.assign(TextButtonImpl, {
  Txt: TextButtonTxt,
  Icon: TextButtonIcon
})

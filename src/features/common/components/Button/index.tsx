import { type ButtonHTMLAttributes } from 'react'
import { buttonRecipe, type ButtonProps } from './style.css'
import { clsx } from 'clsx'
import { ButtonContextProvider } from './context'
import { ButtonTxt } from './compound/Txt'
import { ButtonIcon } from './compound/Icon'
type ButtonImplProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    leftAddon?: React.ReactNode
    rightAddon?: React.ReactNode
  }

const ButtonImpl = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  leftAddon,
  rightAddon,
  ...props
}: ButtonImplProps) => {
  return (
    <ButtonContextProvider
      size={size}
      variant={variant}>
      <button
        className={clsx(
          buttonRecipe({ variant, size, hasAddon: !!leftAddon || !!rightAddon }),
          className
        )}
        type='button'
        {...props}>
        {leftAddon && leftAddon}
        {children}
        {rightAddon && rightAddon}
      </button>
    </ButtonContextProvider>
  )
}

export const Button = Object.assign(ButtonImpl, {
  Txt: ButtonTxt,
  Icon: ButtonIcon
})

import { type ButtonHTMLAttributes } from 'react'
import { buttonRecipe, type ButtonProps } from './style.css'
import { clsx } from 'clsx'
import { ButtonContextProvider } from './context'
import { ButtonTxt } from './compound/Txt'

type ButtonImplProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps

const ButtonImpl = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}: ButtonImplProps) => {
  return (
    <ButtonContextProvider
      size={size}
      variant={variant}>
      <button
        className={clsx(buttonRecipe({ variant, size }), className)}
        type='button'
        {...props}>
        {children}
      </button>
    </ButtonContextProvider>
  )
}

export const Button = Object.assign(ButtonImpl, {
  Txt: ButtonTxt
})

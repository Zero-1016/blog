import { type HTMLAttributes } from 'react'
import { NavigationItem } from './NavigationItem'
import { NavigationContextProvider } from './context'
import { navigationStyle, type NavigationRecipeProps } from './style.css'
import clsx from 'clsx'

export type NavigationProps = HTMLAttributes<HTMLDivElement> & {
  className?: string
} & NavigationRecipeProps

function NavigationImpl({
  children,
  direction = 'horizontal',
  size = 'medium',
  className,
  ...props
}: NavigationProps) {
  return (
    <NavigationContextProvider
      size={size}
      direction={direction}
      {...props}>
      <nav
        className={clsx(navigationStyle({ direction, size }), className)}
        {...props}>
        {children}
      </nav>
    </NavigationContextProvider>
  )
}

export const Navigation = Object.assign(NavigationImpl, {
  Item: NavigationItem
})

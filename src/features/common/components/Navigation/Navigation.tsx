import { type HTMLAttributes } from 'react'
import { NavigationItem } from './NavigationItem'
import { NavigationContextProvider } from './context'
import { navigationStyle } from './style.css'
import clsx from 'clsx'
import { type NavigationDirection, type NavigationSize } from './type'

type NavigationImplProps = HTMLAttributes<HTMLDivElement> & {
  direction?: NavigationDirection
  className?: string
  size?: NavigationSize
}

function NavigationImpl({
  children,
  direction = 'horizontal',
  className,
  size = 'medium',
  ...props
}: NavigationImplProps) {
  return (
    <NavigationContextProvider
      size={size}
      direction={direction}
      {...props}>
      <nav
        className={clsx(navigationStyle({ direction }), className)}
        {...props}>
        {children}
      </nav>
    </NavigationContextProvider>
  )
}

export const Navigation = Object.assign(NavigationImpl, {
  Item: NavigationItem
})

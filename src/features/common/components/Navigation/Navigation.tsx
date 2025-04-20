import { type HTMLAttributes, useEffect, useState } from 'react'
import { NavigationItem } from './NavigationItem'
import { NavigationContextProvider } from './context'
import { navigationStyle } from './style.css'
import clsx from 'clsx'

type NavigationImplProps = HTMLAttributes<HTMLDivElement> & {
  current?: string
  defaultCurrent?: string
  direction?: 'horizontal' | 'vertical'
  className?: string
  size?: 'small' | 'medium' | 'large'
  setCurrent?: (current: string) => void
}

export function NavigationImpl({
  children,
  current: propCurrent,
  defaultCurrent = '',
  direction = 'horizontal',
  className,
  size = 'medium',
  setCurrent: propSetCurrent,
  ...props
}: NavigationImplProps) {
  const [internalCurrent, setInternalCurrent] = useState(() => propCurrent ?? defaultCurrent)
  const current = propCurrent ?? internalCurrent
  const setCurrent = propSetCurrent ?? setInternalCurrent

  useEffect(() => {
    if (propCurrent !== undefined) {
      setInternalCurrent(propCurrent)
    }
  }, [propCurrent])

  return (
    <NavigationContextProvider
      size={size}
      current={current}
      setCurrent={setCurrent}
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

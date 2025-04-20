import { type ComponentProps, useCallback, type MouseEvent } from 'react'
import { useNavigationContext } from './context'
import { Slot } from '@radix-ui/react-slot'
import { Txt, type TxtSize, type TxtColor } from '../Typography'
import Link from 'next/link'
import { composeHandler } from '@/utils/componseHandler'
import { navigationItemStyle } from './style.css'

type NavigationItemProps = Omit<ComponentProps<'div'>, 'href'> & {
  current?: boolean
  asChild?: boolean
  href?: string
}

export function NavigationItem({
  asChild,
  current: propCurrent,
  href,
  children,
  ...restProps
}: NavigationItemProps) {
  const { current: ctxCurrent, setCurrent: ctxSetCurrent, size = 'medium' } = useNavigationContext()
  const current = propCurrent ?? ctxCurrent
  const isActive = current === href
  const textColor = TXT_COLOR_MAP[isActive ? 'current' : 'default']
  const fontSize = TXT_SIZE_MAP[size]

  const handleClick = useCallback(() => {
    if (href) {
      ctxSetCurrent(href)
    }
  }, [href, ctxSetCurrent])

  if (href) {
    return (
      <Link
        href={href}
        onClick={composeHandler(
          handleClick,
          restProps.onClick as unknown as (e: MouseEvent<HTMLElement>) => void
        )}>
        <Txt
          className={navigationItemStyle}
          color={textColor}
          fontSize={fontSize}>
          {children}
        </Txt>
      </Link>
    )
  }

  const Component = asChild ? Slot : 'div'
  return (
    <Component
      {...restProps}
      onClick={composeHandler(handleClick, restProps.onClick)}>
      <Txt
        className={navigationItemStyle}
        color={textColor}
        fontSize={fontSize}>
        {children}
      </Txt>
    </Component>
  )
}

const TXT_SIZE_MAP: Record<string, TxtSize> = {
  small: 'caption',
  medium: 'bodySm',
  large: 'body'
} as const

const TXT_COLOR_MAP: Record<string, TxtColor> = {
  current: 'primary',
  default: 'textSecondary'
} as const

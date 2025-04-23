import { type ComponentProps } from 'react'
import { useNavigationContext } from './context'
import { Txt, type TxtSize, type TxtColor } from '../Typography'
import Link from 'next/link'
import { navigationItemStyle } from './style.css'
import { type NavigationStatus, type NavigationSize } from './type'

type NavigationItemProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
  status?: NavigationStatus
}
export const NavigationItem = ({
  href,
  children,
  status = 'default',
  ...restProps
}: NavigationItemProps) => {
  const { size = 'medium' } = useNavigationContext('NavigationItem')

  const fontSize = TXT_SIZE_MAP[size]
  const isActive = status === 'current'
  const textColor = TXT_COLOR_MAP[isActive ? 'current' : 'default']

  return (
    <Link
      href={href}
      {...restProps}>
      <Txt
        className={navigationItemStyle}
        color={textColor}
        fontSize={fontSize}>
        {children}
      </Txt>
    </Link>
  )
}

const TXT_SIZE_MAP: Record<NavigationSize, TxtSize> = {
  small: 'caption',
  medium: 'bodySm',
  large: 'body'
} as const

const TXT_COLOR_MAP: Record<NavigationStatus, TxtColor> = {
  current: 'primary',
  default: 'textSecondary'
} as const

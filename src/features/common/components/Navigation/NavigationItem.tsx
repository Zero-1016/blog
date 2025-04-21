import { type ComponentProps } from 'react'
import { useNavigationContext } from './context'
import { Txt, type TxtSize, type TxtColor } from '../Typography'
import Link from 'next/link'
import { navigationItemStyle } from './style.css'
import { usePathname } from 'next/navigation'
type NavigationItemProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
  isActive?: boolean
}
export const NavigationItem = ({ href, children, ...restProps }: NavigationItemProps) => {
  const { size = 'medium' } = useNavigationContext('NavigationItem')
  const pathname = usePathname()

  const fontSize = TXT_SIZE_MAP[size]

  const isActive = pathname === href
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

const TXT_SIZE_MAP: Record<string, TxtSize> = {
  small: 'caption',
  medium: 'bodySm',
  large: 'body'
} as const

const TXT_COLOR_MAP: Record<string, TxtColor> = {
  current: 'primary',
  default: 'textSecondary'
} as const

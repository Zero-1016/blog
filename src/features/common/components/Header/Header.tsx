'use client'

import { Flex } from '@/utils/Flex'
import { Navigation } from '@/common/components/Navigation'
import { Txt } from '@/common/components/Typography'
import * as style from './style.css'
import Link from 'next/link'
import { type NavigationItem } from './type'
import { type ComponentProps } from 'react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
export type HeaderProps = {
  logoTitle: string
  navigationItems: NavigationItem[]
} & ComponentProps<'header'>

export function Header(props: HeaderProps) {
  const { logoTitle, navigationItems, className: classNameFromProps, ...restProps } = props
  const pathname = usePathname()
  return (
    <header
      className={clsx(style.container, classNameFromProps)}
      {...restProps}>
      <Flex
        asChild
        justify='between'
        align='center'>
        <div className={style.navWrapper}>
          <Link href='/'>
            <Txt fontSize='h2'>{logoTitle}</Txt>
          </Link>
          <Navigation size='large'>
            {navigationItems.map((item) => (
              <Navigation.Item
                status={item.href === pathname ? 'current' : 'default'}
                key={item.href}
                href={item.href}>
                {item.label}
              </Navigation.Item>
            ))}
          </Navigation>
        </div>
      </Flex>
    </header>
  )
}

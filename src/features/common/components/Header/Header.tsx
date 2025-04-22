'use client'

import { Flex } from '../Flex'
import { Navigation } from '../Navigation'
import { Txt } from '../Typography'
import * as style from './style.css'
import Link from 'next/link'
import { type NavigationItem } from './type'

export type HeaderProps = {
  logoTitle: string
  navigationItems: NavigationItem[]
}

export function Header({ logoTitle, navigationItems }: HeaderProps) {
  return (
    <header className={style.container}>
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

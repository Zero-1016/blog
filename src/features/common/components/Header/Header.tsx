'use client'

import { Flex } from '../Flex'
import { Navigation } from '../Navigation'
import { Txt } from '../Typography'
import * as style from './style.css'
import Link from 'next/link'
const LogoTitle = 'Dev Notes'

const NavigationItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]
export const Header = () => {
  return (
    <header className={style.container}>
      <Flex
        asChild
        justify='between'
        align='center'>
        <div className={style.navWrapper}>
          <Link href='/'>
            <Txt fontSize='h2'>{LogoTitle}</Txt>
          </Link>
          <Navigation size='large'>
            {NavigationItems.map((item) => (
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

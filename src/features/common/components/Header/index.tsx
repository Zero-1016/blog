'use client'

import { Navigation } from '../Navigation'

export const Header = () => {
  return (
    <Navigation size='large'>
      <Navigation.Item href='/'>Home</Navigation.Item>
      <Navigation.Item href='/about'>About</Navigation.Item>
      <Navigation.Item href='/post'>Post</Navigation.Item>
    </Navigation>
  )
}

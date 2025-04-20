import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navigation } from '.'
import { NavigationItem } from './NavigationItem'

describe('Navigation', () => {
  it('네비게이션 아이템이 올바르게 렌더링된다', () => {
    const { container } = render(
      <Navigation>
        <NavigationItem href='/home'>홈</NavigationItem>
        <NavigationItem href='/about'>소개</NavigationItem>
      </Navigation>
    )

    const homeLink = container.querySelector('a[href="/home"]')
    const aboutLink = container.querySelector('a[href="/about"]')

    expect(homeLink).toHaveTextContent('홈')
    expect(aboutLink).toHaveTextContent('소개')
  })

  it('외부 클릭 핸들러가 정상적으로 동작한다', () => {
    const handleClick = vi.fn()
    const { container } = render(
      <Navigation>
        <NavigationItem
          href='/home'
          onClick={handleClick}>
          홈
        </NavigationItem>
      </Navigation>
    )

    const homeLink = container.querySelector('a[href="/home"]') as Element
    fireEvent.click(homeLink, {
      preventDefault: () => {}
    })

    expect(handleClick).toHaveBeenCalled()
  })

  it('asChild prop이 정상적으로 동작한다', () => {
    const { container } = render(
      <Navigation>
        <NavigationItem
          href='/home'
          asChild>
          <button>홈</button>
        </NavigationItem>
      </Navigation>
    )

    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('홈')
  })
})

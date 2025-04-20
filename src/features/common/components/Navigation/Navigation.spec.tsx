import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navigation } from '.'
import { NavigationItem } from './NavigationItem'

describe('Navigation', () => {
  it('renders navigation items correctly', () => {
    render(
      <Navigation>
        <NavigationItem href='/home'>홈</NavigationItem>
        <NavigationItem href='/about'>소개</NavigationItem>
      </Navigation>
    )

    expect(screen.getByText('홈')).toBeInTheDocument()
    expect(screen.getByText('소개')).toBeInTheDocument()
  })

  it('handles defaultCurrent prop correctly', () => {
    render(
      <Navigation defaultCurrent='/home'>
        <NavigationItem href='/home'>홈</NavigationItem>
        <NavigationItem href='/about'>소개</NavigationItem>
      </Navigation>
    )

    const homeText = screen.getByText('홈')
    expect(homeText.closest('span')).toHaveStyle({ color: 'var(--colors-text-primary)' })
  })

  it('updates current state on click', () => {
    render(
      <Navigation defaultCurrent='/home'>
        <NavigationItem href='/home'>홈</NavigationItem>
        <NavigationItem href='/about'>소개</NavigationItem>
      </Navigation>
    )

    const aboutLink = screen.getByText('소개')
    fireEvent.click(aboutLink)

    expect(aboutLink.closest('span')).toHaveStyle({ color: 'var(--colors-text-primary)' })
  })

  it('allows external click handlers', () => {
    const handleClick = vi.fn()
    render(
      <Navigation>
        <NavigationItem
          href='/home'
          onClick={handleClick}>
          홈
        </NavigationItem>
      </Navigation>
    )

    const homeLink = screen.getByText('홈')
    fireEvent.click(homeLink)

    expect(handleClick).toHaveBeenCalled()
  })

  it('supports asChild prop', () => {
    render(
      <Navigation>
        <NavigationItem
          href='/home'
          asChild>
          <button>홈</button>
        </NavigationItem>
      </Navigation>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

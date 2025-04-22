import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  const defaultProps = {
    logoTitle: 'Blog',
    navigationItems: [
      { href: '/about', label: '소개' },
      { href: '/posts', label: '글' },
      { href: '/projects', label: '프로젝트' }
    ]
  }

  it('로고 타이틀을 렌더링한다', () => {
    render(<Header {...defaultProps} />)

    const logo = screen.getByText(defaultProps.logoTitle)
    expect(logo).toBeInTheDocument()
  })

  it('로고는 홈으로 이동하는 링크여야 한다', () => {
    render(<Header {...defaultProps} />)

    const logoLink = screen.getByRole('link', { name: defaultProps.logoTitle })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('네비게이션 아이템들을 렌더링한다', () => {
    render(<Header {...defaultProps} />)

    defaultProps.navigationItems.forEach((item) => {
      const link = screen.getByRole('link', { name: item.label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', item.href)
    })
  })
})

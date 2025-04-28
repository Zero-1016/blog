import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Chip } from './Chip'

describe('Chip', () => {
  it('children을 렌더링한다', () => {
    render(<Chip>테스트 칩</Chip>)
    expect(screen.getByText('테스트 칩')).toBeInTheDocument()
  })

  it('leftAddon을 렌더링한다', () => {
    render(<Chip leftAddon={<span data-testid='left-addon'>L</span>}>칩</Chip>)
    expect(screen.getByTestId('left-addon')).toBeInTheDocument()
  })

  it('rightAddon을 렌더링한다', () => {
    render(<Chip rightAddon={<span data-testid='right-addon'>R</span>}>칩</Chip>)
    expect(screen.getByTestId('right-addon')).toBeInTheDocument()
  })

  it('color prop이 적용된다', () => {
    const { container } = render(<Chip color='primary'>컬러칩</Chip>)
    const element = container.firstChild as HTMLElement
    expect(element.className).toContain('primary')
  })

  it('size prop이 적용된다', () => {
    const { container } = render(<Chip size='small'>사이즈칩</Chip>)
    const element = container.firstChild as HTMLElement
    expect(element.className).toContain('small')
  })
})

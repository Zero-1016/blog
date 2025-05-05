// @jest-environment jsdom
import { render, screen } from '@testing-library/react'
import { Card, type CardProps } from './Card'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'

const defaultProps: CardProps = {
  title: '테스트 제목',
  description: '테스트 설명',
  image: '/test.jpg',
  createdAt: new Date('2024-06-01').toISOString(),
  tags: ['태그1', '태그2']
}

describe('Card', () => {
  it('제목, 설명, 날짜, 태그, 이미지가 렌더링된다', () => {
    render(<Card {...defaultProps} />)

    expect(screen.getByText('테스트 제목')).toBeInTheDocument()
    expect(screen.getByText('테스트 설명')).toBeInTheDocument()
    expect(screen.getByText('2024-06-01')).toBeInTheDocument()
    expect(screen.getByText('태그1')).toBeInTheDocument()
    expect(screen.getByText('태그2')).toBeInTheDocument()
    expect(screen.getByAltText('테스트 제목')).toBeInTheDocument()
  })
})

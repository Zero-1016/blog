import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Txt } from '.'
import { fontSizeVariants, colorVariants } from './style.css'

describe('Typography', () => {
  it('기본 텍스트를 렌더링한다', () => {
    render(<Txt>테스트 텍스트</Txt>)
    expect(screen.getByText('테스트 텍스트')).toBeInTheDocument()
  })

  it('각 크기 변형에 맞는 HTML 태그를 사용한다', () => {
    const { rerender } = render(<Txt fontSize={fontSizeVariants.h1}>제목 1</Txt>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    rerender(<Txt fontSize={fontSizeVariants.h2}>제목 2</Txt>)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()

    rerender(<Txt fontSize={fontSizeVariants.h3}>제목 3</Txt>)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()

    rerender(<Txt fontSize={fontSizeVariants.body}>본문</Txt>)
    expect(screen.getByText('본문').tagName).toBe('P')
  })

  it('색상 변형을 적용한다', () => {
    const { container } = render(<Txt color={colorVariants.textPrimary}>주요 텍스트</Txt>)
    const element = container.firstChild as HTMLElement
    expect(element.className).toMatch(/color_textPrimary/)
  })

  it('추가 props를 전달한다', () => {
    render(
      <Txt
        data-testid='test-text'
        aria-label='테스트 라벨'>
        테스트 텍스트
      </Txt>
    )
    const text = screen.getByTestId('test-text')
    expect(text).toHaveAttribute('aria-label', '테스트 라벨')
  })

  it('ref를 전달한다', () => {
    const ref = { current: null }
    render(<Txt ref={ref}>테스트 텍스트</Txt>)
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })

  it('asChild prop으로 다른 컴포넌트를 렌더링한다', () => {
    render(
      <Txt asChild>
        <button>버튼 텍스트</button>
      </Txt>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

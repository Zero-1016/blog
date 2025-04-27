import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Txt } from './Typography'
import { fontSizeVariants, colorVariants } from './style.css'
import '@/styles/theme.css'

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

  it('색상 변형을 클래스를 이용하여 확인한다', () => {
    const { container } = render(<Txt color={colorVariants.primary}>주요 텍스트</Txt>)
    const element = container.firstChild as HTMLElement

    expect(element.className).toContain(colorVariants.primary)

    const classNames = element.className.split(' ')
    expect(classNames.some((className) => className.includes('_color_primary'))).toBe(true)
  })

  it('색상 변형을 jsdom 환경에서 className과 style 객체로 확인한다', () => {
    /**
     * - vanilla-extract는 빌드 타임에 CSS 파일을 만들고, className만 붙여준다.
     * - jsdom은 CSS 파일을 파싱하지 않으므로, 실제 style 값(element.style.color 등)은 비어 있거나 기본값만 나온다.
     * - emotion, styled-components는 <style> 태그를 동적으로 삽입하므로 jsdom에서도 getComputedStyle 등으로 어느 정도 스타일 확인이 가능하다.
     * - 실제 스타일 값 검증이 필요하다면 E2E 테스트(Cypress, Playwright 등)에서 확인해야 한다.
     *
     * 참고: https://vanilla-extract.style/documentation/test-environments/
     */
    const { container } = render(<Txt color={colorVariants.primary}>주요 텍스트</Txt>)
    const element = container.firstChild as HTMLElement

    // className이 정상적으로 붙는지 확인
    expect(element.className).toContain(colorVariants.primary)

    // jsdom 환경에서는 style 값이 비어 있음을 확인
    expect(element.style.color).toBe('')
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

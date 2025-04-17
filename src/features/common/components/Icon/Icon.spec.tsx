import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Icon } from '.'

describe('Icon 컴포넌트', () => {
  it('기본 아이콘이 정상적으로 렌더링되어야 한다', () => {
    render(
      <Icon
        name='Heart'
        data-testid='test-icon'
      />
    )

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('width', '24')
    expect(icon).toHaveAttribute('height', '24')
  })

  it('크기가 지정된 아이콘이 정상적으로 렌더링되어야 한다', () => {
    const size = 32
    render(
      <Icon
        data-testid='test-icon'
        name='Star'
        size={size}
      />
    )

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('width', size.toString())
    expect(icon).toHaveAttribute('height', size.toString())
  })

  it('색상이 지정된 아이콘이 정상적으로 렌더링되어야 한다', () => {
    const color = '#FF6B6B'
    render(
      <Icon
        data-testid='test-icon'
        name='Heart'
        color={color}
      />
    )

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('stroke', color)
  })

  it('모든 props가 지정된 아이콘이 정상적으로 렌더링되어야 한다', () => {
    const props = {
      name: 'Star' as const,
      size: 40,
      color: '#FFD700',
      strokeWidth: 2.5
    }

    render(
      <Icon
        data-testid='test-icon'
        {...props}
      />
    )

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('width', props.size.toString())
    expect(icon).toHaveAttribute('height', props.size.toString())
    expect(icon).toHaveAttribute('stroke', props.color)
    expect(icon).toHaveAttribute('stroke-width', props.strokeWidth.toString())
  })
})

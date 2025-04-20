import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { TextButton } from '.'

describe('TextButton', () => {
  it('renders text button with text', () => {
    render(<TextButton>Click me</TextButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<TextButton className='custom-class'>Button</TextButton>)
    expect(screen.getByText('Button')).toHaveClass('custom-class')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    render(<TextButton onClick={handleClick}>Click me</TextButton>)

    const button = screen.getByText('Click me')
    await button.click()

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

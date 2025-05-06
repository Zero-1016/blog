import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('Footer가 올바르게 렌더링한다', () => {
    render(<Footer />)

    expect(screen.getByText('Dev Notes')).toBeInTheDocument()

    const copyrightIcon = screen.getByRole('img')
    expect(copyrightIcon).toHaveClass('lucide', 'lucide-copyright')
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { Icon } from '../Icon'
import { Txt } from '../Typography'
import { Flex } from '../../utils/Flex'

describe('Footer', () => {
  it('children을 렌더링한다', () => {
    const testContent = 'Footer Content'
    render(<Footer>{testContent}</Footer>)

    expect(screen.getByText(testContent)).toBeInTheDocument()
  })

  it('기본 스토리북 예시처럼 렌더링된다', () => {
    render(
      <Footer>
        <Flex
          align='center'
          gap={4}>
          <Icon
            data-testid='copyright-icon'
            role='img'
            size={16}
            name='Copyright'
          />
          <Txt size='bodySm'>Dev Notes</Txt>
        </Flex>
      </Footer>
    )

    expect(screen.getByText('Dev Notes')).toBeInTheDocument()
    const copyrightIcon = screen.getByTestId('copyright-icon')
    expect(copyrightIcon).toHaveClass('lucide', 'lucide-copyright')
  })
})

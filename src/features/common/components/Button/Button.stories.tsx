import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: '버튼의 스타일 변형'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기'
    },
    onClick: { action: 'clicked' },
    className: {
      control: 'text',
      description: '버튼에 적용할 추가 클래스명'
    },
    children: {
      control: 'text',
      description: '버튼 내부에 들어갈 텍스트'
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '기본 버튼'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '보조 버튼'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    children: '큰 버튼'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    children: '작은 버튼'
  }
}

export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    disabled: true
  }
}

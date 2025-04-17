import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'
import { icons } from 'lucide-react'
const meta = {
  title: 'Common/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(icons)
    },
    size: {
      control: { type: 'number' }
    },
    color: {
      control: 'color'
    }
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Heart',
    size: 24
  }
}

export const ColoredIcon: Story = {
  args: {
    name: 'Star',
    color: '#FFD700',
    size: 32
  }
}

export const IconGroup: Story = {
  args: {
    name: 'Heart'
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon
        name='Heart'
        color='#FF6B6B'
      />
      <Icon
        name='Star'
        color='#FFD700'
        size={32}
      />
      <Icon
        name='Sun'
        color='#FFA500'
        size={40}
      />
      <Icon
        name='Moon'
        color='#6C5CE7'
      />
      <Icon
        name='Github'
        size={36}
      />
    </div>
  )
}

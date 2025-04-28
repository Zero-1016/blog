import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'

const meta = {
  title: 'Common/Chip',
  component: Chip,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white']
    },
    size: {
      control: 'select',
      options: ['small', 'medium']
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Chip',
    color: 'primary',
    size: 'medium'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Chip',
    color: 'primary',
    size: 'medium',
    leftAddon: <Chip.Icon name='Check' />
  }
}

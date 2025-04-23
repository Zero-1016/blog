import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from './Navigation'

const meta = {
  title: 'Common/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical']
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large']
    }
  }
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: ` 
import { Navigation } from '@/features/common/components/Navigation'

export default function Home() {
  return (
    <Navigation>
      <Navigation.Item href='/home'>Home</Navigation.Item>
      <Navigation.Item href='/about'>About</Navigation.Item>
      <Navigation.Item href='/post'>Post</Navigation.Item>
    </Navigation>
  )
}
`
      }
    }
  },
  render: () => {
    return (
      <Navigation>
        <Navigation.Item
          status='current'
          href='/home'>
          Home
        </Navigation.Item>
        <Navigation.Item
          status='default'
          href='/about'>
          About
        </Navigation.Item>
        <Navigation.Item
          status='default'
          href='/post'>
          Post
        </Navigation.Item>
      </Navigation>
    )
  }
}

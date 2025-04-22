import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta = {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    logoTitle: 'Dev Notes',
    navigationItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100vw',
          maxWidth: '1200px',
          margin: '0 auto',
          height: '100%'
        }}>
        <Story />
      </div>
    )
  ],
  render: (args) => <Header {...args} />
}

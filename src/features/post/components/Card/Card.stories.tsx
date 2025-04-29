import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { fn } from '@storybook/test'
const meta = {
  title: 'Post/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    image: {
      control: 'text'
    },
    createdAt: {
      control: 'date'
    },
    tags: {
      control: 'object'
    }
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Next.js와 TypeScript로 더 나은 웹 개발하기',
    description:
      'Next.js와 TypeScript로 더 나은 웹 개발하기, 오늘 배운 것 리액트 18의 새로운 기능과 성능 최적화 전략',
    image: '/assets/post/react.png',
    createdAt: new Date().toISOString(),
    tags: ['Next.js', 'TypeScript', 'React', 'Web Development'],
    onClick: () => fn()
  },
  render: (args) => <Card {...args} />
}

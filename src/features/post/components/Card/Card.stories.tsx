import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
const meta = {
  title: 'Post/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fileName: 'test1.mdx',
    frontmatter: {
      title: 'Next.js와 TypeScript로 더 나은 웹 개발하기',
      description:
        'Next.js와 TypeScript로 더 나은 웹 개발하기, 오늘 배운 것 리액트 18의 새로운 기능과 성능 최적화 전략',
      image: '/assets/post/react.png',
      date: '2021-01-01',
      tags: ['Next.js', 'TypeScript', 'React', 'Web Development']
    },
    createdAt: '2021-01-01',
    modifiedAt: '2021-01-01'
  },
  render: (args) => <Card {...args} />
}

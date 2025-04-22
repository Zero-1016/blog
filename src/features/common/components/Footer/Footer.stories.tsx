import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { Icon } from '../Icon'
import { Txt } from '../Typography'
import { Flex } from '../Flex'
const meta = {
  title: 'Common/Footer',
  component: Footer,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Flex
        align='center'
        gap={4}>
        <Icon
          size={16}
          name='Copyright'
        />
        <Txt size='bodySm'>Dev Notes</Txt>
      </Flex>
    )
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
  render: (args) => <Footer {...args} />
}

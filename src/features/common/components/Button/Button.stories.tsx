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
      options: ['primary', 'secondary']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    onClick: { action: 'clicked' },
    className: {
      control: 'text'
    },
    children: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Button {...args}>기본 버튼</Button>
}

export const SizeWithVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button
          size='small'
          variant='primary'>
          <Button.Txt>기본 버튼</Button.Txt>
        </Button>
        <Button
          size='medium'
          variant='primary'>
          <Button.Txt>기본 버튼</Button.Txt>
        </Button>
        <Button
          size='large'
          variant='primary'>
          <Button.Txt>기본 버튼</Button.Txt>
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button
          size='small'
          variant='secondary'>
          <Button.Txt>기본 버튼</Button.Txt>
        </Button>
        <Button
          size='medium'
          variant='secondary'>
          <Button.Txt>기본 버튼</Button.Txt>
        </Button>
        <Button
          size='large'
          variant='secondary'>
          <Button.Txt>기본 버튼</Button.Txt>
        </Button>
      </div>
    </div>
  )
}

export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button
        leftAddon={
          <Button.Icon
            size={args.size}
            name='Plus'
          />
        }
        {...args}>
        <Button.Txt
          size={args.size}
          variant={args.variant}>
          기본 버튼
        </Button.Txt>
      </Button>
      <Button
        leftAddon={
          <Button.Icon
            size={args.size}
            name='Plus'
          />
        }
        rightAddon={
          <Button.Icon
            size={args.size}
            name='Plus'
          />
        }
        {...args}>
        <Button.Txt
          size={args.size}
          variant={args.variant}>
          기본 버튼
        </Button.Txt>
      </Button>
    </div>
  )
}

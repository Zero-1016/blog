import type { Meta, StoryObj } from '@storybook/react'
import { TextButton } from './TextButton'

const meta = {
  title: 'Common/TextButton',
  component: TextButton,
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
    },
    fit: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof TextButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <TextButton>기본 버튼</TextButton>
}

export const SizeWithVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <TextButton
          size='small'
          variant='primary'>
          <TextButton.Txt>기본 버튼</TextButton.Txt>
        </TextButton>
        <TextButton
          size='medium'
          variant='primary'>
          <TextButton.Txt>기본 버튼</TextButton.Txt>
        </TextButton>
        <TextButton
          size='large'
          variant='primary'>
          <TextButton.Txt>기본 버튼</TextButton.Txt>
        </TextButton>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <TextButton
          size='small'
          variant='secondary'>
          <TextButton.Txt>기본 버튼</TextButton.Txt>
        </TextButton>
        <TextButton
          size='medium'
          variant='secondary'>
          <TextButton.Txt>기본 버튼</TextButton.Txt>
        </TextButton>
        <TextButton
          size='large'
          variant='secondary'>
          <TextButton.Txt>기본 버튼</TextButton.Txt>
        </TextButton>
      </div>
    </div>
  )
}

export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextButton
        leftAddon={
          <TextButton.Icon
            size={args.size}
            name='Plus'
          />
        }
        {...args}>
        <TextButton.Txt
          size={args.size}
          variant={args.variant}>
          기본 버튼
        </TextButton.Txt>
      </TextButton>
      <TextButton
        leftAddon={
          <TextButton.Icon
            size={args.size}
            name='Plus'
          />
        }
        rightAddon={
          <TextButton.Icon
            size={args.size}
            name='Plus'
          />
        }
        {...args}>
        <TextButton.Txt
          size={args.size}
          variant={args.variant}>
          기본 버튼
        </TextButton.Txt>
      </TextButton>
    </div>
  )
}

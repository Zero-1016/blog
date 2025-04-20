import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from '.'
import { NavigationItem } from './NavigationItem'
import { Txt } from '../Typography'
import { useState } from 'react'

const meta = {
  title: 'Common/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'text'
    },
    defaultCurrent: {
      control: 'text'
    },
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

const NavigationStory = ({ defaultCurrent = '', ...args }) => {
  const [current, setCurrent] = useState(defaultCurrent)

  return (
    <Navigation
      {...args}
      current={current}
      setCurrent={setCurrent}>
      <NavigationItem href='/home'>Home</NavigationItem>
      <NavigationItem href='/about'>About</NavigationItem>
      <NavigationItem href='/post'>Post</NavigationItem>
    </Navigation>
  )
}

export const Default: Story = {
  render: (args) => <NavigationStory {...args} />
}

export const WithDefaultCurrent: Story = {
  render: (args) => (
    <NavigationStory
      {...args}
      defaultCurrent='/about'
    />
  )
}

export const WithCustomComponent: Story = {
  render: (args) => (
    <NavigationStory {...args}>
      <NavigationItem
        href='/home'
        asChild>
        <button type='button'>
          <Txt
            asChild
            color='textSecondary'
            fontSize='bodySm'>
            <span>Home</span>
          </Txt>
        </button>
      </NavigationItem>
      <NavigationItem href='/about'>About</NavigationItem>
      <NavigationItem
        href='/contact'
        asChild>
        <Txt
          asChild
          color='textSecondary'
          fontSize='bodySm'>
          <span>Contact</span>
        </Txt>
      </NavigationItem>
    </NavigationStory>
  )
}

export const Horizontal: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <NavigationStory {...args} />
    </div>
  )
}

export const Vertical: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <NavigationStory {...args} />
    </div>
  )
}

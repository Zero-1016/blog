import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from '.'
import { NavigationItem } from './NavigationItem'
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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: ` 
return (
  <Navigation>
    <NavigationItem href='/home'>Home</NavigationItem>
    <NavigationItem href='/about'>About</NavigationItem>
    <NavigationItem href='/post'>Post</NavigationItem>
  </Navigation>
)`
      }
    }
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [current, setCurrent] = useState(args.defaultCurrent)

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
}

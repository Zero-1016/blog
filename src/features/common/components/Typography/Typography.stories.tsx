import type { Meta, StoryObj } from '@storybook/react'
import { Txt } from './Typography'
import { colorVariants, fontSizeVariants } from './style.css'

const meta = {
  title: 'Common/Typography',
  component: Txt,
  parameters: {
    layout: 'centered',
    chromatic: {
      viewports: [320, 768, 1024],
      diffThreshold: 0.2
    }
  },
  tags: ['autodocs'],
  args: {
    children: '텍스트 예시입니다.'
  },
  argTypes: {
    fontSize: {
      control: 'select',
      options: Object.values(fontSizeVariants),
      description: '텍스트 크기 변형',
      table: {
        defaultValue: { summary: fontSizeVariants.body }
      }
    },
    color: {
      control: 'select',
      options: Object.values(colorVariants),
      description: '텍스트 색상',
      table: {
        defaultValue: { summary: colorVariants.inherit }
      }
    },
    className: {
      control: 'text',
      description: '추가 스타일 클래스'
    }
  }
} satisfies Meta<typeof Txt>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    chromatic: { disableSnapshot: false }
  }
}

export const Heading1: Story = {
  args: {
    fontSize: fontSizeVariants.h1,
    children: '페이지 제목, 주요 섹션 헤더 (h1)'
  }
}

export const Heading2: Story = {
  args: {
    fontSize: fontSizeVariants.h2,
    children: '섹션 제목, 중요 컨텐츠 헤더 (h2)'
  }
}

export const Heading3: Story = {
  args: {
    fontSize: fontSizeVariants.h3,
    children: '서브 섹션 제목 (h3)'
  }
}

export const Body: Story = {
  args: {
    fontSize: fontSizeVariants.body,
    children: '기본 본문 텍스트입니다. 일반적인 문장에 사용됩니다.'
  }
}

export const BodySmall: Story = {
  args: {
    fontSize: fontSizeVariants.bodySm,
    children: '작은 본문 텍스트입니다. 보조 설명이나 부가 정보에 사용됩니다.'
  }
}

export const Caption: Story = {
  args: {
    fontSize: fontSizeVariants.caption,
    children: '캡션 텍스트입니다. 이미지 설명이나 매우 작은 부가 정보에 사용됩니다.'
  }
}

export const Colors: Story = {
  parameters: {
    chromatic: { disableSnapshot: false }
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Txt
        data-testid='text-primary'
        color={colorVariants.textPrimary}>
        주요 텍스트 색상 (textPrimary)
      </Txt>
      <Txt
        data-testid='text-secondary'
        color={colorVariants.textSecondary}>
        보조 텍스트 색상 (textSecondary)
      </Txt>
    </div>
  )
}

export const AllVariants: Story = {
  parameters: {
    chromatic: { disableSnapshot: false }
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Txt fontSize={fontSizeVariants.h1}>Heading 1 - 페이지 제목 (2rem, bold)</Txt>
      <Txt fontSize={fontSizeVariants.h2}>Heading 2 - 섹션 제목 (1.5rem, semibold)</Txt>
      <Txt fontSize={fontSizeVariants.h3}>Heading 3 - 서브 섹션 제목 (1.25rem, medium)</Txt>
      <Txt fontSize={fontSizeVariants.body}>Body - 기본 본문 텍스트 (1rem, regular)</Txt>
      <Txt fontSize={fontSizeVariants.bodySm}>
        Body Small - 작은 본문 텍스트 (0.875rem, regular)
      </Txt>
      <Txt fontSize={fontSizeVariants.caption}>Caption - 캡션 텍스트 (0.75rem, regular)</Txt>
    </div>
  )
}

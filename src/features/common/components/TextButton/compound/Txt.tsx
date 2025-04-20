import { Txt } from '@/features/common/components/Typography'
import { type ComponentProps } from 'react'
import { useTextButtonContext } from '../context'

type TextButtonTxtProps = ComponentProps<typeof Txt> & {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary'
}

export const TextButtonTxt = ({
  size: propSize,
  variant: propVariant,
  ...restProps
}: TextButtonTxtProps) => {
  const { size: ctxSize, variant: ctxVariant } = useTextButtonContext()
  const variant = propVariant ?? ctxVariant
  const size = propSize ?? ctxSize

  return (
    <Txt
      fontSize={TXT_SIZE_MAP[size]}
      color={TXT_COLOR_MAP[variant]}
      {...restProps}
    />
  )
}

const TXT_SIZE_MAP = {
  small: 'caption',
  medium: 'bodySm',
  large: 'body'
} as const

const TXT_COLOR_MAP = {
  primary: 'white90',
  secondary: 'textSecondary'
} as const

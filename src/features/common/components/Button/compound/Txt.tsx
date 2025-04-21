import { Txt } from '@/features/common/components/Typography'
import { type ComponentProps } from 'react'
import { useButtonContext } from '../context'

type ButtonTxtProps = ComponentProps<typeof Txt> & {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary'
}

export const ButtonTxt = ({
  size: propSize,
  variant: propVariant,
  ...restProps
}: ButtonTxtProps) => {
  const { size: ctxSize, variant: ctxVariant } = useButtonContext('Button.Txt')
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

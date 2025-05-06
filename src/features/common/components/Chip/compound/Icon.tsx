import { type ComponentProps } from 'react'
import { useChipContext } from '../context'
import { Icon } from '@/common/components/Icon'
import { vars } from '@/styles/theme.css'
import type { ChipColor } from '../type'
type ChipIconProps = ComponentProps<typeof Icon> & {
  color?: ChipColor
}

export const ChipIcon = (props: ChipIconProps) => {
  const { size: sizeFromProps, color: colorFromProps, name, ...restProps } = props
  const { size: ctxSize, variant: ctxVariant } = useChipContext('Chip.Icon')

  const size = sizeFromProps ?? ICON_SIZE_MAP[ctxSize]
  const variant = colorFromProps ?? ctxVariant
  return (
    <Icon
      size={size}
      color={ICON_COLOR_MAP[variant]}
      name={name}
      {...restProps}
    />
  )
}

const ICON_SIZE_MAP = {
  small: 10,
  medium: 14
} as const

const ICON_COLOR_MAP = {
  primary: vars.colors.white100,
  secondary: vars.colors.grey,
  white: vars.colors.primary
} as const

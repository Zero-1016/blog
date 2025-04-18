import { type Txt } from '@/features/common/components/Typography'
import { type ComponentProps } from 'react'
import { useButtonContext } from '../context'
import { Icon, type IconName } from '../../Icon'

type ButtonIconProps = ComponentProps<typeof Txt> & {
  size?: 'small' | 'medium' | 'large'
  name: IconName
}

export const ButtonIcon = ({ size: propSize, name, ...restProps }: ButtonIconProps) => {
  const { size: ctxSize } = useButtonContext()
  const size = propSize ?? ctxSize

  return (
    <Icon
      size={ICON_SIZE_MAP[size]}
      name={name}
      {...restProps}
    />
  )
}

const ICON_SIZE_MAP = {
  small: 18,
  medium: 21,
  large: 24
} as const

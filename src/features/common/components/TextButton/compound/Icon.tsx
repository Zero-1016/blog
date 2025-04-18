import { type Txt } from '@/features/common/components/Typography'
import { type ComponentProps } from 'react'
import { useTextButtonContext } from '../context'
import { Icon, type IconName } from '../../Icon'

type TextButtonIconProps = ComponentProps<typeof Txt> & {
  size?: 'small' | 'medium' | 'large'
  name: IconName
}

export const TextButtonIcon = ({ size: propSize, name, ...restProps }: TextButtonIconProps) => {
  const { size: ctxSize } = useTextButtonContext()
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

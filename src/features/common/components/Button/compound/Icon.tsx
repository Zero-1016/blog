import { type ComponentProps } from 'react'
import { useButtonContext } from '../context'
import { Icon } from '../../Icon'

type ButtonIconProps = Omit<ComponentProps<typeof Icon>, 'size'> & {
  size?: 'small' | 'medium' | 'large'
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

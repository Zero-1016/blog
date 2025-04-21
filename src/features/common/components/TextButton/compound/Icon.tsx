import { type ComponentProps } from 'react'
import { useTextButtonContext } from '../context'
import { Icon } from '../../Icon'

type TextButtonIconProps = Omit<ComponentProps<typeof Icon>, 'size'> & {
  size?: 'small' | 'medium' | 'large'
}

export const TextButtonIcon = ({ size: propSize, name, ...restProps }: TextButtonIconProps) => {
  const { size: ctxSize } = useTextButtonContext('TextButton.Icon')
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

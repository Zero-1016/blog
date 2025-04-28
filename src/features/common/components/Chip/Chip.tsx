import { type ComponentProps, type ElementType } from 'react'
import { If } from '../If'
import * as style from './style.css'
import clsx from 'clsx'
import { type ChipColor, type ChipSize } from './type'
import { ChipIcon } from './compound/Icon'
export type ChipProps = ComponentProps<'div'> & {
  children: React.ReactNode
  as?: ElementType
  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
  color?: ChipColor
  size?: ChipSize
}

const ChipImpl = ({
  children,
  leftAddon,
  rightAddon,
  as: Component = 'div',
  className: classNameFromProps,
  color,
  size = 'medium',
  ...props
}: ChipProps) => {
  const hasLeftAddon = !!leftAddon
  const hasRightAddon = !!rightAddon
  return (
    <Component
      className={clsx(style.chipStyle({ color, size }), classNameFromProps)}
      {...props}>
      <If condition={hasLeftAddon}>
        <div className={style.chipLeftAddonStyle}>{leftAddon}</div>
      </If>
      {children}
      <If condition={hasRightAddon}>
        <div className={style.chipRightAddonStyle}>{rightAddon}</div>
      </If>
    </Component>
  )
}

export const Chip = Object.assign(ChipImpl, {
  Icon: ChipIcon
})

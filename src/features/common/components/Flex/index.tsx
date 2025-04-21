import { type RecipeVariants } from '@vanilla-extract/recipes'

import { flexStyle } from './style.css'
import { type CommonProps } from '@/types/common'
import { Slot } from '@radix-ui/react-slot'
import { getGapSizeFromNumber } from './utils'
import { type HTMLAttributes } from 'react'
import clsx from 'clsx'

type FlexProps = RecipeVariants<typeof flexStyle> &
  CommonProps & {
    gap?: number
    asChild?: boolean
  } & HTMLAttributes<HTMLDivElement>

export const Flex = (props: FlexProps) => {
  const {
    direction,
    align,
    justify,
    wrap,
    asChild,
    gap,
    children,
    className: classNameFromProps,
    style: styleFromProps,
    ...restProps
  } = props
  const Component = asChild ? Slot : 'div'
  return (
    <Component
      style={{ gap: gap ? getGapSizeFromNumber(gap) : undefined, ...styleFromProps }}
      className={clsx(flexStyle({ direction, align, justify, wrap }), classNameFromProps)}
      {...restProps}>
      {children}
    </Component>
  )
}

import { type RecipeVariants } from '@vanilla-extract/recipes'
import { typography, fontSizeVariants } from './style.css'
import { Slot } from '@radix-ui/react-slot'
import { type ComponentPropsWithRef, type ElementType } from 'react'
import { type Colors } from '@/styles/theme.css'
import { clsx } from 'clsx'
import { vars } from '@/styles/theme.css'

type TxtProps<C extends ElementType> = {
  color?: keyof Colors
  asChild?: boolean
} & TxtVariant &
  Omit<ComponentPropsWithRef<C>, keyof TxtVariant>

export type TxtVariant = RecipeVariants<typeof typography>

export function Txt<C extends ElementType>({
  color,
  children,
  fontSize = fontSizeVariants.body,
  asChild,
  ref,
  className: classNameProp,
  ...restProps
}: TxtProps<C>) {
  const Component = asChild ? Slot : variantToHtmlTag[fontSize]
  const className = clsx(typography({ fontSize }), color && vars.colors[color], classNameProp)

  return (
    <Component
      ref={ref}
      className={className}
      {...restProps}>
      {children}
    </Component>
  )
}

const variantToHtmlTag = {
  [fontSizeVariants.h1]: 'h1',
  [fontSizeVariants.h2]: 'h2',
  [fontSizeVariants.h3]: 'h3',
  [fontSizeVariants.body]: 'p',
  [fontSizeVariants.bodySm]: 'p',
  [fontSizeVariants.caption]: 'p'
} as const

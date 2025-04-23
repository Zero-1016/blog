import { typography, fontSizeVariants, type TxtRecipeProps } from './style.css'
import { Slot } from '@radix-ui/react-slot'
import { type ComponentPropsWithRef, type ElementType, forwardRef, type CSSProperties } from 'react'
import { clsx } from 'clsx'

type TxtProps<C extends ElementType> = {
  className?: string
  style?: CSSProperties
  asChild?: boolean
} & TxtRecipeProps &
  Omit<ComponentPropsWithRef<C>, keyof TxtRecipeProps>

export const Txt = forwardRef<HTMLParagraphElement, TxtProps<ElementType>>(function Txt<
  C extends ElementType = 'p'
>(
  {
    color,
    children,
    fontSize = fontSizeVariants.body,
    asChild,
    className: classNameFromProps,
    style,
    ...restProps
  }: TxtProps<C>,
  ref: ComponentPropsWithRef<C>['ref']
) {
  const Component = asChild ? Slot : variantToHtmlTag[fontSize]
  const className = clsx(typography({ fontSize, color }), classNameFromProps)

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
      {...restProps}>
      {children}
    </Component>
  )
})

const variantToHtmlTag = {
  [fontSizeVariants.h1]: 'h1',
  [fontSizeVariants.h2]: 'h2',
  [fontSizeVariants.h3]: 'h3',
  [fontSizeVariants.body]: 'p',
  [fontSizeVariants.bodySm]: 'p',
  [fontSizeVariants.caption]: 'p'
} as const

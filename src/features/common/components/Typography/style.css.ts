import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles/theme.css'

export const fontSizeVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'body',
  bodySm: 'bodySm',
  caption: 'caption'
} as const

export const colorVariants = {
  primary: 'primary',
  grey: 'grey',
  white100: 'white100',
  white90: 'white90',
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary',
  inherit: 'inherit'
} as const

export const typography = recipe({
  variants: {
    fontSize: {
      [fontSizeVariants.h1]: {
        fontSize: vars.fontSize['2xl'],
        fontWeight: vars.fontWeight.bold,
        lineHeight: vars.lineHeight.tight
      },
      [fontSizeVariants.h2]: {
        fontSize: vars.fontSize.xl,
        fontWeight: vars.fontWeight.semibold,
        lineHeight: vars.lineHeight.tight
      },
      [fontSizeVariants.h3]: {
        fontSize: vars.fontSize.lg,
        fontWeight: vars.fontWeight.medium,
        lineHeight: vars.lineHeight.snug
      },
      [fontSizeVariants.body]: {
        fontSize: vars.fontSize.base,
        fontWeight: vars.fontWeight.regular,
        lineHeight: vars.lineHeight.normal
      },
      [fontSizeVariants.bodySm]: {
        fontSize: vars.fontSize.sm,
        fontWeight: vars.fontWeight.regular,
        lineHeight: vars.lineHeight.normal
      },
      [fontSizeVariants.caption]: {
        fontSize: vars.fontSize.xs,
        fontWeight: vars.fontWeight.regular,
        lineHeight: vars.lineHeight.normal
      }
    },
    color: {
      [colorVariants.primary]: {
        color: vars.colors.primary
      },
      [colorVariants.textPrimary]: {
        color: vars.colors.textPrimary
      },
      [colorVariants.textSecondary]: {
        color: vars.colors.textSecondary
      },
      [colorVariants.grey]: {
        color: vars.colors.grey
      },
      [colorVariants.white100]: {
        color: vars.colors.white100
      },
      [colorVariants.white90]: {
        color: vars.colors.white90
      },
      [colorVariants.inherit]: {
        color: 'inherit'
      }
    }
  },
  defaultVariants: {
    fontSize: fontSizeVariants.body
  }
})

export type TxtRecipeProps = RecipeVariants<typeof typography>

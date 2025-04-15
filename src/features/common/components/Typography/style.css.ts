import { recipe } from '@vanilla-extract/recipes'
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
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary',
  textDefault: 'textDefault'
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
      [colorVariants.textPrimary]: {
        color: vars.colors.textPrimary
      },
      [colorVariants.textSecondary]: {
        color: vars.colors.textSecondary
      }
    }
  },
  defaultVariants: {
    fontSize: fontSizeVariants.body,
    color: colorVariants.textPrimary
  }
})

import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'

export const chipStyle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.borderRadius.full
  },
  variants: {
    color: {
      primary: {
        background: vars.colors.primary,
        color: vars.colors.white100
      },
      secondary: {
        background: vars.colors.grey,
        color: vars.colors.textSecondary,
        border: `1px solid ${vars.colors.borderLight}`
      },
      white: {
        background: vars.colors.white100,
        color: vars.colors.textPrimary,
        border: `1px solid ${vars.colors.borderLight}`
      }
    },
    size: {
      small: {
        padding: '2px 4px',
        fontSize: vars.fontSize.xs
      },
      medium: {
        padding: '4px 8px',
        fontSize: vars.fontSize.sm
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium'
  }
})

export const chipLeftAddonStyle = style({
  paddingRight: '2px'
})

export const chipRightAddonStyle = style({
  paddingLeft: '2px'
})

export type ChipRecipeProps = RecipeVariants<typeof chipStyle>

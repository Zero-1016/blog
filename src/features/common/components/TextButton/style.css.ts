import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles/theme.css'

export const textButtonRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.medium,
    lineHeight: vars.lineHeight.snug,
    transition: 'all 150ms ease-in-out',
    cursor: 'pointer',
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  },
  variants: {
    size: {
      small: {
        height: '2rem',
        fontSize: vars.fontSize.sm
      },
      medium: {
        height: '2.5rem',
        fontSize: vars.fontSize.sm
      },
      large: {
        height: '3rem',
        fontSize: vars.fontSize.sm
      }
    },
    variant: {
      primary: {
        color: vars.colors.textPrimary
      },
      secondary: {
        color: vars.colors.textSecondary
      }
    },
    hasAddon: {
      true: {
        padding: '0.5rem 0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: vars.space.small
      },
      false: {
        padding: '0.5rem 1rem'
      }
    },
    fit: {
      true: {
        width: 'fit-content',
        padding: 0,
        height: 'fit-content'
      }
    }
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary'
  }
})

export type TextButtonRecipeProps = RecipeVariants<typeof textButtonRecipe>

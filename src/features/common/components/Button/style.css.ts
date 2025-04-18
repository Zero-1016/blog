import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'

export const buttonRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.25rem',
    transition: 'all 150ms ease-in-out',
    cursor: 'pointer',
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    ':focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
    }
  },
  variants: {
    size: {
      small: {
        height: '2rem',
        padding: '0.25rem 0.5rem',
        fontSize: '0.75rem',
        borderRadius: '0.25rem'
      },
      medium: {
        height: '2.5rem',
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
        borderRadius: '0.375rem'
      },
      large: {
        height: '3rem',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        borderRadius: '0.5rem'
      }
    },
    variant: {
      primary: {
        backgroundColor: '#3B82F6',
        color: '#FFFFFF'
      },
      secondary: {
        backgroundColor: '#E5E7EB',
        color: '#374151'
      }
    },
    hasAddon: {
      true: {
        padding: '0.5rem 0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.25rem'
      },
      false: {
        padding: '0.5rem 1rem'
      }
    }
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary'
  }
})

export type ButtonProps = RecipeVariants<typeof buttonRecipe>

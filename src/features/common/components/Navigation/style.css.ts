import { recipe } from '@vanilla-extract/recipes'

export const navigationStyle = recipe({
  base: {
    display: 'flex',
    gap: '1rem'
  },
  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row'
      },
      vertical: {
        flexDirection: 'column'
      }
    },
    size: {
      small: {
        gap: '0.5rem'
      },
      medium: {
        gap: '1rem'
      },
      large: {
        gap: '1.5rem'
      }
    }
  },
  defaultVariants: {
    direction: 'horizontal',
    size: 'medium'
  }
})

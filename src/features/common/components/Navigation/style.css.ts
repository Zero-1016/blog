import { style } from '@vanilla-extract/css'
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

export const navigationItemStyle = style({
  cursor: 'pointer',
  transition: 'color 0.3s ease-in-out'
})

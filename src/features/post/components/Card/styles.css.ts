import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const card = style({
  cursor: 'pointer',
  width: '100%',
  height: '230px',
  minWidth: vars.width.section,
  borderRadius: vars.borderRadius.large,
  backgroundColor: vars.colors.white100,
  padding: '20px'
})

export const imageContainer = style({
  width: '240px',
  height: '150px',
  overflow: 'hidden'
})

export const image = style({
  objectFit: 'cover',
  objectPosition: 'center',
  transition: 'transform 0.3s ease-in-out',
  selectors: {
    [`${card}:hover &`]: {
      transform: 'scale(1.05)'
    }
  }
})

export const content = style({
  display: 'flex',
  minHeight: '150px',
  flexDirection: 'column',
  gap: '10px',
  marginLeft: '20px'
})

export const title = style({
  transition: 'color 0.3s ease-in-out',
  selectors: {
    [`${card}:hover &`]: {
      color: vars.colors.primary,
      opacity: 0.8
    }
  }
})

export const icon = style({
  margin: '0 20px',
  color: vars.colors.primary
})

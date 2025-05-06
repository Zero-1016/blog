import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  maxWidth: vars.width.section,
  margin: '0 auto'
})

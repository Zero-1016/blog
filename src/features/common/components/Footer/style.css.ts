import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const container = style({
  width: '100%',
  height: vars.height.footer,
  backgroundColor: vars.colors.grey100
})

import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  paddingTop: vars.height.header,
  marginTop: vars.space.xxlarge
})

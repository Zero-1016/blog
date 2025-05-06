import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  paddingTop: vars.height.header,
  paddingBottom: vars.height.footer,
  margin: `${vars.padding.root} auto 0`,
  maxWidth: vars.width.container
})

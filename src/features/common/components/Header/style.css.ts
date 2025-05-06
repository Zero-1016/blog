import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const container = style({
  width: '100%',
  height: vars.height.header,
  backgroundColor: vars.colors.white100,
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: vars.zIndex.header
})

export const navWrapper = style({
  maxWidth: vars.width.section,
  width: '100%',
  height: '100%',
  margin: '0 auto'
})

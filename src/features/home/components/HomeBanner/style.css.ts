import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const container = style({
  backgroundColor: vars.colors.white100,
  borderRadius: vars.borderRadius.large,
  padding: vars.padding.xxlarge,
  width: '100%',
  margin: '0 auto',
  maxWidth: vars.width.section,
  height: '100%'
})

export const button = style({
  width: 'fit-content'
})

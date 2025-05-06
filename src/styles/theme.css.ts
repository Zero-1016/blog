import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#3182f6',
    grey: '#f9fafb',
    white100: '#ffffff',
    white90: '#f2f2f2',
    textPrimary: '#1b1c1d',
    textSecondary: '#6b7280',
    borderLight: '#e5e7eb',
    borderMedium: '#d1d5db'
  },
  padding: {
    container: '2rem',
    section: '3rem',
    root: '80px',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    xlarge: '1.5rem',
    xxlarge: '2rem'
  },
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '24px',
    xxlarge: '32px'
  },
  borderRadius: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    full: '9999px'
  },
  fontFamily: {
    body: "Pretendard, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem'
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  },
  width: {
    section: '768px',
    container: '1200px'
  },
  height: {
    header: '4rem',
    footer: '4rem'
  },
  zIndex: {
    header: '100'
  }
})

export type Colors = typeof vars.colors
export type Padding = typeof vars.padding
export type Space = typeof vars.space
export type BorderRadius = typeof vars.borderRadius
export type FontFamily = typeof vars.fontFamily
export type FontSize = typeof vars.fontSize

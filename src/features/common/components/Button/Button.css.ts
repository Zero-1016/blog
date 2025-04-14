import { style, styleVariants } from '@vanilla-extract/css'

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  lineHeight: '1.25rem',
  transition: 'all 150ms ease-in-out',
  cursor: 'pointer',
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
  }
})

export const variants = styleVariants({
  primary: {
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    ':hover': {
      backgroundColor: '#2563EB'
    }
  },
  secondary: {
    backgroundColor: '#E5E7EB',
    color: '#374151',
    ':hover': {
      backgroundColor: '#D1D5DB'
    }
  }
})

export const sizes = styleVariants({
  small: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem'
  },
  medium: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem'
  },
  large: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem'
  }
})

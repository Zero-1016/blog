import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'
import * as layers from './layers.css'
import './reset.css'

// Dark mode theme
// globalStyle(':root[data-theme="dark"]', {
//   vars: {
//     [vars.colors.background]: "#0a0a0a",
//     [vars.colors.foreground]: "#ededed",
//   },
// });

// Global styles
globalStyle('html, body', {
  '@layer': {
    [layers.utilities]: {
      maxWidth: '100vw',
      overflowX: 'hidden'
    }
  }
})

globalStyle('body', {
  '@layer': {
    [layers.utilities]: {
      color: vars.colors.textPrimary,
      background: vars.colors.white90,
      fontFamily: vars.fontFamily.body,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }
  }
})
globalStyle('*', {
  '@layer': {
    [layers.reset]: {
      listStyle: 'none',
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    }
  }
})

globalStyle('a', {
  '@layer': {
    [layers.utilities]: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }
})

globalStyle('button', {
  '@layer': {
    [layers.utilities]: {
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    }
  }
})

globalStyle('input', {
  '@layer': {
    [layers.utilities]: {
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    }
  }
})

globalStyle('textarea', {
  '@layer': {
    [layers.utilities]: {
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    }
  }
})

globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
  '@layer': {
    [layers.utilities]: {
      display: 'block'
    }
  }
})

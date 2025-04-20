'use client'

import { createCtxProvider } from '@/utils/createContextProvider'
import { type NavigationSize, type NavigationDirection } from './type'

type NavigationContextValue = {
  size: NavigationSize
  direction: NavigationDirection
}

const [NavigationContextProvider, useNavigationContext] = createCtxProvider<NavigationContextValue>(
  'Navigation',
  {
    size: 'medium',
    direction: 'horizontal'
  }
)

export { NavigationContextProvider, useNavigationContext }

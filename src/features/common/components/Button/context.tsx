'use client'

import { createCtxProvider } from '@/features/common/utils/createContextProvider'

type ButtonContextValue = {
  size: 'small' | 'medium' | 'large'
  variant: 'primary' | 'secondary'
}

const [ButtonContextProvider, useButtonContext] = createCtxProvider<ButtonContextValue>('Button', {
  size: 'medium',
  variant: 'primary'
})

export { ButtonContextProvider, useButtonContext }

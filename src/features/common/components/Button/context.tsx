import { createCtxProvider } from '@/utils/createContextProvider'

type ButtonContextValue = {
  size: 'small' | 'medium' | 'large'
  variant: 'primary' | 'secondary'
}

const [ButtonContextProvider, useButtonContext] = createCtxProvider<ButtonContextValue>('Button', {
  size: 'medium',
  variant: 'primary'
})

export { ButtonContextProvider, useButtonContext }

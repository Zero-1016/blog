import { createCtxProvider } from '@/utils/createContextProvider'

type NavigationContextValue = {
  current: string
  setCurrent: (target: string) => void
  size: 'small' | 'medium' | 'large'
}

const [NavigationContextProvider, useNavigationContext] = createCtxProvider<NavigationContextValue>(
  'Navigation',
  {
    current: '',
    setCurrent: () => {},
    size: 'medium'
  }
)

export { NavigationContextProvider, useNavigationContext }

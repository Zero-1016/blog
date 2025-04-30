import { createCtxProvider } from '@/features/common/utils/createContextProvider'

type TextButtonContextValue = {
  size: 'small' | 'medium' | 'large'
  variant: 'primary' | 'secondary'
}

const [TextButtonContextProvider, useTextButtonContext] = createCtxProvider<TextButtonContextValue>(
  'TextButton',
  {
    size: 'medium',
    variant: 'primary'
  }
)

export { TextButtonContextProvider, useTextButtonContext }

import { useContext, createContext, type ReactNode } from 'react'

interface ProviderProps<T> {
  children: ReactNode
  value: T
}

export function createCtxProvider<T>(componentName: string, defaultValue?: T) {
  const Context = createContext<T | undefined>(defaultValue)

  function Provider({ children, value }: ProviderProps<T>) {
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  Provider.displayName = componentName + 'Provider'

  function useCtx() {
    const value = useContext(Context)
    if (value === undefined) {
      throw new Error('Context must be used within its provider')
    }
    return value
  }

  return [Provider, useCtx] as const
}

import { type HTMLAttributes } from 'react'

type FlexProps = HTMLAttributes<HTMLDivElement> & {
  direction?: 'row' | 'column'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around'
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
}
export function Flex({ children, ...props }: FlexProps) {
  return <div {...props}>{children}</div>
}

import { type CommonProps } from '@/types/common'
import clsx from 'clsx'
import * as styles from './style.css'
import { Flex } from '../Flex'
import { type ComponentProps } from 'react'

export type FooterProps = CommonProps & ComponentProps<'footer'>

export function Footer({ children, className: classNameFromProps, ...props }: FooterProps) {
  return (
    <Flex
      asChild
      justify='center'
      align='center'>
      <footer
        className={clsx(styles.container, classNameFromProps)}
        {...props}>
        {children}
      </footer>
    </Flex>
  )
}

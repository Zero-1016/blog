import { type CommonProps } from '@/types/common'
import { Txt } from '../Typography'
import clsx from 'clsx'
import * as styles from './style.css'
import { Flex } from '../Flex'
export interface FooterProps extends CommonProps {
  label: React.ReactNode
}

export function Footer({ label, className: classNameFromProps, ...props }: FooterProps) {
  return (
    <Flex
      asChild
      justify='center'
      align='center'>
      <footer
        className={clsx(styles.container, classNameFromProps)}
        {...props}>
        <Txt size='bodySm'>{label}</Txt>
      </footer>
    </Flex>
  )
}

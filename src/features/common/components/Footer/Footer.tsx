import { type CommonProps } from '@/types/common'
import clsx from 'clsx'
import * as styles from './style.css'
import { type ComponentProps } from 'react'
import { Flex } from '@/utils/Flex'
import { Txt } from '../Typography'
import { Icon } from '../Icon'

export type FooterProps = CommonProps & ComponentProps<'footer'>

export function Footer({ className: classNameFromProps, ...props }: FooterProps) {
  return (
    <Flex
      asChild
      justify='center'
      align='center'>
      <footer
        className={clsx(styles.container, classNameFromProps)}
        {...props}>
        <Flex
          align='center'
          gap={4}>
          <Icon
            role='img'
            size={16}
            name='Copyright'
          />
          <Txt size='bodySm'>Dev Notes</Txt>
        </Flex>
      </footer>
    </Flex>
  )
}

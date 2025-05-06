import { Txt } from '@/common/components/Typography'
import * as style from './style.css'
import { Button } from '@/common/components/Button'
import { Icon } from '@/common/components/Icon'
import { Flex } from '@/utils/Flex'
import Link from 'next/link'
import { getSitePath } from '@/common/utils/getSitePath'
export const HomeBanner = () => {
  return (
    <div className={style.container}>
      <Flex
        direction='column'
        gap={30}>
        <Flex
          direction='column'
          gap={12}>
          <Txt
            fontSize='h1'
            weight='bold'>
            프론트엔드 개발 이야기
          </Txt>
          <Txt
            fontSize='body'
            color='textSecondary'>
            React, TypeScript, 그리고 모던 웹 개발에 대한 이야기를 공유합니다.
          </Txt>
        </Flex>
        <Link
          href={getSitePath.postAll}
          className={style.button}>
          <Button
            size='medium'
            rightAddon={<Icon name='ArrowRight' />}
            variant='primary'>
            글 보기
          </Button>
        </Link>
      </Flex>
    </div>
  )
}

'use client'

import { Chip } from '@/common/components/Chip'
import { Flex } from '@/utils/Flex'
import * as style from './style.css'
import { useRouter, useSearchParams } from 'next/navigation'
type PostFilterProps = {
  tags: string[]
}

export const PostFilter = ({ tags }: PostFilterProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleShowAll = () => {
    router.push('/post')
  }

  const handleShowTag = (tag: string) => {
    router.push(`/post?tag=${tag}`)
  }

  const currentTag = searchParams.get('tag')

  return (
    <Flex
      direction='row'
      gap={8}
      align='center'
      justify='center'>
      <Chip
        size='medium'
        color={currentTag === null ? 'primary' : 'white'}
        className={style.chipStyle}
        onClick={handleShowAll}>
        All
      </Chip>
      {tags.map((tag) => (
        <Chip
          key={tag}
          size='medium'
          color={currentTag?.includes(tag) ? 'primary' : 'white'}
          className={style.chipStyle}
          onClick={() => handleShowTag(tag)}>
          {tag}
        </Chip>
      ))}
    </Flex>
  )
}

'use client'

import { Chip } from '@/common/components/Chip'
import { Flex } from '@/utils/Flex'
import * as style from './style.css'
import { useTags } from '../../hooks/useTags'
type PostFilterProps = {
  tags: string[]
}

export const PostFilter = ({ tags }: PostFilterProps) => {
  const { currentTag, handleTag, isAll } = useTags()

  return (
    <Flex
      direction='row'
      gap={8}
      align='center'
      justify='center'>
      <Chip
        size='medium'
        color={isAll ? 'primary' : 'white'}
        className={style.chipStyle}
        onClick={() => handleTag()}>
        All
      </Chip>
      {tags.map((tag) => (
        <Chip
          key={tag}
          size='medium'
          color={currentTag === tag ? 'primary' : 'white'}
          className={style.chipStyle}
          onClick={() => handleTag(tag)}>
          {tag}
        </Chip>
      ))}
    </Flex>
  )
}

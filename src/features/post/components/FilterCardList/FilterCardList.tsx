'use client'

import { type Post } from '../../types/post'
import * as style from './style.css'
import { useTags } from '../../hooks/useTags'
import { Flex } from '@/utils/Flex'
import { Card } from '@/common/components/Card'

type Props = {
  posts: Post[]
}

export const FilterCardList = ({ posts }: Props) => {
  const { currentTag, isAll } = useTags()

  return (
    <Flex
      asChild
      direction='column'
      align='center'
      justify='center'
      gap={10}>
      <section className={style.container}>
        {posts
          .filter((post) => {
            if (isAll) return true
            return post.frontmatter.tags.includes(currentTag as string)
          })
          .map((post) => (
            <Card
              key={post.fileName}
              {...post}
            />
          ))}
      </section>
    </Flex>
  )
}

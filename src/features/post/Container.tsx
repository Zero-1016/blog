import { Txt } from '@/common/components/Typography'
import { type Post } from '../post/types/post'
import { FilterCardList } from './components/FilterCardList'
import { PostFilter } from './components/PostFilter'
import * as style from './styles.css'
import { Flex } from '@/utils/Flex'
import { Suspense } from 'react'

export const Container = ({ posts }: { posts: Post[] }) => {
  const tags = new Set(posts.flatMap((post) => post.frontmatter.tags))
  return (
    <div className={style.container}>
      <Flex
        direction='column'
        align='center'
        justify='center'
        gap={20}>
        <Txt fontSize='h2'>기억과 경험을 남기는 공간</Txt>
        <Suspense fallback={null}>
          <PostFilter tags={Array.from(tags)} />
          <FilterCardList posts={posts} />
        </Suspense>
      </Flex>
    </div>
  )
}

import { type Post } from '../post/types/post'
import * as style from './styles.css'
import { HomeBanner } from './components/HomeBanner'
import { CardList } from './components/CardList'
import { Flex } from '@/utils/Flex'

export const Container = ({ posts }: { posts: Post[] }) => {
  return (
    <div className={style.container}>
      <Flex
        direction='column'
        gap={48}>
        <HomeBanner />
        <CardList posts={posts} />
      </Flex>
    </div>
  )
}

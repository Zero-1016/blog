import { Flex } from '@/utils/Flex'
import { type Post } from '@/features/post/types/post'
import { Txt } from '@/common/components/Typography'
import * as style from './style.css'
import { Card } from '@/common/Card'

export const CardList = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={style.container}>
      <Flex
        direction='column'
        gap={16}>
        <Txt
          fontSize='h2'
          weight='bold'>
          최근 게시글
        </Txt>
        <Flex
          direction='column'
          align='center'
          justify='center'
          gap={10}>
          {posts.map((post) => (
            <Card
              key={post.fileName}
              {...post}
            />
          ))}
        </Flex>
      </Flex>
    </section>
  )
}

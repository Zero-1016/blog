import { Card } from '@/features/post/components/Card/Card'
import { Flex } from '@/utils/Flex'
import { type Post } from '@/features/post/types/post'

export const CardList = ({ posts }: { posts: Post[] }) => {
  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      gap={10}
      asChild>
      <section>
        {posts.map((post) => (
          <Card
            key={post.fileName}
            {...post}
          />
        ))}
      </section>
    </Flex>
  )
}

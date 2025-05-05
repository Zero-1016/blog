import { Flex } from '@/utils/Flex'
import { Card } from '../post/components/Card/Card'
import { type Post } from '../post/types/post'

export const Container = ({ posts }: { posts: Post[] }) => {
  return (
    <Flex>
      {posts.map((post) => (
        <Card
          key={post.fileName}
          {...post}
        />
      ))}
    </Flex>
  )
}

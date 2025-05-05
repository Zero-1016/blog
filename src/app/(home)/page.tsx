import { Flex } from '@/features/common/utils/Flex'
import { Card } from '@/features/post/components/Card'
import { getPosts } from '@/features/post/utils/getPosts'

export default async function Home() {
  const posts = await getPosts()
  return (
    <div>
      <Flex
        align='center'
        direction='column'
        gap={10}>
        {posts?.map((post) => (
          <Card
            key={post.fileName}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={post.frontmatter.image}
            createdAt={post.createdAt}
            tags={post.frontmatter.tags}
          />
        ))}
      </Flex>
    </div>
  )
}

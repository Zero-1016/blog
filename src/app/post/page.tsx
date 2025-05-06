import { PostContainer } from '@/features/post'
import { getPosts } from '@/features/post/utils/getPosts'

export default async function Page() {
  const posts = await getPosts()
  return <PostContainer posts={posts} />
}

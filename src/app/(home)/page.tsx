import { HomeContainer } from '@/features/home'
import { getPosts } from '@/features/post/utils/getPosts'

export default async function Home() {
  const posts = await getPosts()
  return <HomeContainer posts={posts} />
}

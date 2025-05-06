import { HomeContainer } from '@/features/home'
import { getPosts } from '@/features/post/utils/getPosts'

export default async function Home() {
  const recentPosts = (await getPosts()).slice(0, 2)
  return <HomeContainer posts={recentPosts} />
}

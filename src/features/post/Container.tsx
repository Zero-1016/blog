import { type Post } from '../post/types/post'
import { FilterCardList } from './components/FilterCardList'
import { PostFilter } from './components/PostFilter'
import * as style from './styles.css'

export const Container = ({ posts }: { posts: Post[] }) => {
  const tags = new Set(posts.flatMap((post) => post.frontmatter.tags))
  return (
    <div className={style.container}>
      <PostFilter tags={Array.from(tags)} />
      <FilterCardList posts={posts} />
    </div>
  )
}

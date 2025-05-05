import { CardList } from './components/CardList'
import { type Post } from '../post/types/post'
import * as style from './styles.css'

export const Container = ({ posts }: { posts: Post[] }) => {
  return (
    <div className={style.container}>
      <CardList posts={posts} />
    </div>
  )
}

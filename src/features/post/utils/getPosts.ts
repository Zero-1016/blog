import path from 'path'
import { readdir, stat, readFile } from 'fs/promises'
import { type Post } from '../types/post'
import { parseFrontmatter } from './parseFrontmatter'

// 모든 포스트를 가져오는 함수
export const getPosts = async (): Promise<Post[]> => {
  const postsPath = path.join(process.cwd(), '_posts')
  const files = (await readdir(postsPath)) as unknown as string[]

  return await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(postsPath, file)
      const stats = await stat(filePath)
      const content = await readFile(filePath, 'utf-8')
      const { frontmatter } = parseFrontmatter(content)

      return {
        fileName: file,
        createdAt: stats.birthtime,
        modifiedAt: stats.mtime,
        frontmatter
      }
    })
  )
}

getPosts().then(console.log)

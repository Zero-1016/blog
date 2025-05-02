import path from 'path'
import { stat, readFile } from 'fs/promises'
import { type PostFrontmatter, type PostFile } from '../types/post'
import { parseFrontmatter } from './parseFrontmatter'

type PostContent = PostFile & {
  frontmatter: PostFrontmatter
  content: string
}

// 모든 포스트를 가져오는 함수
export const getPost = async (fileName: string): Promise<PostContent> => {
  const postsPath = path.join(process.cwd(), '_posts')
  const filePath = path.join(postsPath, fileName)
  const stats = await stat(filePath)
  const content = await readFile(filePath, 'utf-8')
  const { frontmatter, content: body } = parseFrontmatter(content)

  return {
    fileName,
    createdAt: stats.birthtime,
    modifiedAt: stats.mtime,
    frontmatter,
    content: body
  }
}

getPost('test1.mdx').then(console.log)

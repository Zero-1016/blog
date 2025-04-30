import { type PostFrontmatter } from '../types/post'

// Markdown 파일의 프론트매터를 파싱하는 함수
export const parseFrontmatter = (
  content: string
): { frontmatter: PostFrontmatter; content: string } => {
  if (!content.startsWith('---')) throw new Error('Invalid frontmatter')

  const end = content.indexOf('---', 3)
  if (end === -1) throw new Error('Invalid frontmatter')

  const frontmatterRaw = content.slice(3, end).trim()
  const body = content.slice(end + 3).trim()

  const frontmatter: PostFrontmatter = {
    title: '',
    date: '',
    description: '',
    tags: [],
    image: ''
  }

  frontmatterRaw.split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':')
    if (key && rest.length > 0) {
      const k = key.trim() as keyof PostFrontmatter
      const value = rest.join(':').trim()
      if (k === 'tags') {
        // tags는 배열로 파싱
        frontmatter.tags = value
          .slice(1, -1)
          .split(',')
          .map((v) => v.trim().replace(/^["']|["']$/g, ''))
      } else {
        // 나머지는 문자열로 할당
        frontmatter[k] = value.replace(/^["']|["']$/g, '')
      }
    }
  })

  return { frontmatter, content: body }
}

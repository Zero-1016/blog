export type Post = PostFile & {
  frontmatter: PostFrontmatter
}

export type PostFile = {
  fileName: string
  createdAt: Date | string
  modifiedAt: Date | string
}

export type PostFrontmatter = {
  title: string
  date: Date | string
  description: string
  tags: string[]
  image: string
}

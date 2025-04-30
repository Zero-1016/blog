export type PostFile = {
  fileName: string
  createdAt: Date
  modifiedAt: Date
}

export type PostFrontmatter = {
  title: string
  date: string
  description: string
  tags: string[]
  image: string
}

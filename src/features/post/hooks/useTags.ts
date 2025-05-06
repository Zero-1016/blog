'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const useTags = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleTag = useCallback(
    (tag?: string) => {
      if (tag) {
        router.push(`/post?tag=${tag}`)
      } else {
        router.push('/post')
      }
    },
    [router]
  )

  const isAll = searchParams.get('tag') == null

  const currentTag = searchParams.get('tag')
  return { currentTag, handleTag, isAll }
}

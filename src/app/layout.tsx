import type { Metadata } from 'next'
import '@/styles/globals.css'
import { pretendard } from '@/styles/fonts/pretendard'

export const metadata: Metadata = {
  title: '개발자 지형',
  description: '개발자 지형의 기술 블로그'
}

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={pretendard.variable}
      lang='ko'>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import '@/styles/globals.css'
import { pretendard } from '@/styles/fonts/pretendard'
import { Header, type HeaderProps } from '@/features/common/components/Header'
import { Footer } from '@/features/common/components/Footer'

export const metadata: Metadata = {
  title: '개발자 지형',
  description: '개발자 지형의 기술 블로그'
}

const headerProps: HeaderProps = {
  logoTitle: 'Dev Notes',
  navigationItems: [
    { label: 'Home', href: '/' },
    { label: 'Post', href: '/post' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]
} as const

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={pretendard.variable}
      lang='ko'>
      <body>
        <Header {...headerProps} />
        {children}
        <Footer />
      </body>
    </html>
  )
}

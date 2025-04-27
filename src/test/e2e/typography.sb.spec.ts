import { test, expect } from '@playwright/test'

test('Storybook에서 Txt 컴포넌트의 primary 컬러가 적용되는지 확인', async ({ page }) => {
  // Storybook에서 Primary 스토리의 URL로 이동
  await page.goto('http://localhost:6006/?path=/story/common-typography--colors')

  // Storybook의 프리뷰 iframe을 찾음
  const frame = page.frameLocator('iframe#storybook-preview-iframe')

  // iframe 내부에서 텍스트로 요소 찾기
  const element = frame.getByText('주요 텍스트 색상 (textPrimary)')

  // 컬러값 추출
  const color = await element.evaluate((el) => getComputedStyle(el).color)

  // 기대하는 컬러값: #1b1c1d → rgb(27, 28, 29)
  expect(color).toBe('rgb(27, 28, 29)')
})

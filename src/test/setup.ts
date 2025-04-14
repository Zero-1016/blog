import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// 각 테스트 후에 cleanup 실행
afterEach(() => {
  cleanup()
})

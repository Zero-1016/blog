'use client'

import { createCtxProvider } from '@/features/common/utils/createContextProvider'
import type { ChipSize, ChipColor } from './type'

type ChipContextValue = {
  size: ChipSize
  variant: ChipColor
}

const [ChipContextProvider, useChipContext] = createCtxProvider<ChipContextValue>('Chip', {
  size: 'medium',
  variant: 'primary'
})

export { ChipContextProvider, useChipContext }

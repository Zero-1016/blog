import { type Colors } from '@/styles/theme.css'

export type ChipColor = Omit<Colors, 'primary' | 'white' | 'secondary'>
export type ChipSize = 'small' | 'medium'

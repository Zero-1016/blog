import { type colorVariants, type fontSizeVariants } from './style.css'

export type TxtColor = keyof typeof colorVariants
export type TxtSize = keyof typeof fontSizeVariants

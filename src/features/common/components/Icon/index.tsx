import { type LucideProps, icons } from 'lucide-react'

export type IconName = keyof typeof icons

interface IconProps extends Omit<LucideProps, 'icon'> {
  name: IconName
  size?: number
  color?: string
}

export function Icon({ name, size = 24, color, ...props }: IconProps) {
  const IconComponent = icons[name]

  if (!IconComponent) {
    throw new Error(`Icon with name ${name} not found`)
  }

  return (
    <IconComponent
      size={size}
      color={color}
      {...props}
    />
  )
}

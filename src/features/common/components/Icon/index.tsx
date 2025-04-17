import { type LucideProps, icons } from 'lucide-react'

interface IconProps extends Omit<LucideProps, 'icon'> {
  name: keyof typeof icons
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

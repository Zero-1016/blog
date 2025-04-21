type SwitchCaseProps = {
  value: string
  cases: Record<string, React.ReactNode>
  defaultComponent?: React.ReactNode
}

export function SwitchCase({ value, cases, defaultComponent = null }: SwitchCaseProps) {
  return cases[value] || defaultComponent
}

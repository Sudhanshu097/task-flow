import {
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  Terminal,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo: Terminal,
  spinner: Loader2,
  sun: SunMedium,
  moon: Moon,
} as const
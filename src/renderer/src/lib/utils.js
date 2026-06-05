import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Стандартная утилита shadcn/ui: объединяет классы и разруливает конфликты Tailwind.
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

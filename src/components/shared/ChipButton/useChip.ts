import { ref } from 'vue'
import type { ChipOption } from './Chip.types'

export function useChip(options: ChipOption[], initialValue: string) {
  const selected = ref(initialValue)

  const select = (value: string) => {
    selected.value = value
  }

  return {
    selected,
    options,
    select,
  }
}

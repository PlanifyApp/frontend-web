import { computed } from "vue";
import type { ChipProps } from "./Chip";

export function useChip(props: ChipProps) {
  const chipClass = computed(() => {
    if (props.disabled) {
      return 'tw-bg-gray-300 tw-text-gray-500 cursor-not-allowed';
    }

    switch (props.type) {
      case 'primary':
        return '!tw-bg-primary !tw-text-white';
      case 'quaternary':
        return '!tw-bg-yellow-500 !tw-text-white';
      default:
        return '!tw-bg-quaternary !tw-text-white';
    }
  });


  const iconColor = computed(() =>
    props.disabled ? '--p-chip-icon-color: #6b7280' : '--p-chip-icon-color: white'
  );

  /**
   * (Opcional) Lógica para selección de chips.
   */
  const select = (value: string) => {
    // Por ahora está vacío, puedes manejar aquí selección múltiple o toggle
    console.log("Seleccionar chip con valor:", value);
  };

  return {
    chipClass,
    iconColor,
    select
  };
}




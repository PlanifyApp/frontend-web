import { computed } from 'vue';
import type { SwitchProps } from './SwitchProps';

export function useSwitch(props: SwitchProps) {
  const switchClass = computed(() => {
    return {
      'custom-switch--primary': props.type === 'primary',
      'custom-switch--secondary': props.type === 'secondary',
    };
  });

  return {
    switchClass,
  };
}

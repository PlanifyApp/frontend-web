// useReusableToast.ts

import { useToast } from 'primevue/usetoast';
import { computed } from 'vue';
import type { ReusableToastProps, ToastOptions } from './ReusableToastProps';

export function useReusableToast(props: ReusableToastProps) {
  const toast = useToast();

  function showToast(options: ToastOptions) {
    toast.add({
      group: props.group,
      severity: options.severity || 'info',
      summary: options.summary,
      detail: options.detail,
      life: options.life ?? 3000,
      closable: options.closable ?? true,
    });
  }

  const toastClass = computed(() => {
    return {
      'custom-toast--primary': props.type === 'primary',
      'custom-toast--secondary': props.type === 'secondary',
    };
  });

  return {
    showToast,
    toastClass,
  };
}

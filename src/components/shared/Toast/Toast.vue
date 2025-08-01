<template>
  <PrimeToast
    :position="props.position"
    :group="props.group"
    :class="classes"
  />
</template>

<script setup lang="ts">
import PrimeToast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { computed } from 'vue';
import type { ReusableToastProps, ToastOptions } from './ReusableToastProps';
import { useReusableToast } from './useReusableToast';

const props = withDefaults(defineProps<ReusableToastProps>(), {
  group: 'default',
  position: 'top-right',
  type: 'primary',
});

const { showToast, toastClass } = useReusableToast(props);

defineExpose({
  showToast,
});

const classes = toastClass;
</script>

<style scoped>
.custom-toast--primary .p-toast-message {
  background-color: #007DC3;
  color: white;
}
.custom-toast--secondary .p-toast-message {
  background-color: #6c757d;
  color: white;
}
</style>

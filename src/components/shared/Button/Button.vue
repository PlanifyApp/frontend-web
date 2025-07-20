<template>
  <Button label="" class="!tw-bg-primary tw-rounded tw-h-10 !tw-w-[100px] "/>
  
</template>

<script setup lang="ts">
import Button from 'primevue/button';

const props = defineProps<{
  label: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}>();
</script>

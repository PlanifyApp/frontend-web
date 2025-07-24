<template>
  <ToggleSwitch
    v-model="model"
    :disabled="props.disabled"
    class=""
  />
</template>

<script setup lang="ts">
import ToggleSwitch from 'primevue/toggleswitch';
import { computed } from 'vue';
import { SwitchProps } from './SwitchProps';
import { useSwitch } from './useSwitch';

const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
  type: 'primary',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});



const { switchClass } = useSwitch(props);
const classes = switchClass;
</script>

<style>
.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
  background-color: #007DC3 !important;
}
</style>

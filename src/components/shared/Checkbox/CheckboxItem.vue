<template>
  <Checkbox
    v-model="model"
    :label="label"
    :type="type"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
import Checkbox from './Checkbox.vue';

const props = defineProps({
  label: String,
  modelValue: Boolean,
  type: String,
  disabled: Boolean,
});
const emit = defineEmits(['update:modelValue']);
const model = defineModel<boolean>('modelValue');
</script>

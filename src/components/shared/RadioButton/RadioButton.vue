<template>
  <div>
    <RadioButton
      :modelValue="modelValue"
      :value="value"
      :disabled="disabled"
      class=""
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <label v-if="label" class="tw-ml-2">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton';
import { RadioButtonProps } from './RadioButton';

const props = withDefaults(defineProps<RadioButtonProps>(), {
  label: '',
  disabled: false,
});

defineEmits(['update:modelValue']);



// const radioClass = () => {
//     // return 'tw-flex tw-items-center tw-border tw-border-dashed tw-p-2 tw-rounded';
// }
</script>
<style>
.p-radiobutton-box {
  border: 1px solid #007DC3 !important;
}

.p-radiobutton-checked .p-radiobutton-box{
  background-color: #007DC3 !important;
}

</style>

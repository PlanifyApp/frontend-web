<template>
  <div :class="classes.wrapper">
    <PrimeCheckbox
      v-model="internalValue"
      :binary="true"
      :disabled="props.disabled"
      class="tw-w-5 tw-h-5 tw-rounded tw-border tw-border-gray-300 tw-flex tw-items-center tw-justify-center"
      :class="{
        'tw-bg-primary tw-border-primary': internalValue,
      }"
    />
    <label class="tw-text-sm">{{ props.label }}</label>
  </div>
</template>

<script setup lang="ts">
import PrimeCheckbox from "primevue/checkbox";
import { ref, watch } from "vue";
import type { CheckboxProps } from "./CheckboxProps.js";
import { useCheckbox } from "./useCheckbox";

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: "",
  type: "primary",
  disabled: false,
});

const emit = defineEmits(["update:modelValue"]);
const internalValue = ref(props.modelValue);

watch(internalValue, (val) => {
  emit("update:modelValue", val);
});

const { checkboxClass } = useCheckbox(props);
const classes = checkboxClass();
</script>
<style>
.p-checkbox-box{
  background-color: transparent !important;
}
</style>



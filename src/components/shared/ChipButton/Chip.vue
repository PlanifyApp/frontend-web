<template>
  <div class="tw-flex tw-gap-3 tw-p-2 tw-rounded-md">
    <button
      v-for="option in options"
      :key="option.value"
      @click="select(option.value)"
      :class="[
        'tw-flex tw-items-center tw-gap-3 tw-px-4 tw-py-1.5 tw-rounded-md tw-font-medium tw-transition tw-text-white',
        modelValue === option.value
          ? option.activeClass ?? 'tw-bg-primary'
          : option.inactiveClass ?? 'tw-bg-quaternary',
      ]"
    >
      <span v-if="option.icon">{{ option.icon }}</span>
      <span>{{ option.label }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, watch } from "vue";
import { ChipOption } from "./Chip.types";
import { useChip } from "./useChip";

const props = defineProps<{
  modelValue: string;
  options: ChipOption[];
}>();

const emit = defineEmits(["update:modelValue"]);

const { selected, select } = useChip(props.options, props.modelValue);

watch(selected, (val) => emit("update:modelValue", val));
watch(
  () => props.modelValue,
  (val) => {
    if (val !== selected.value) {
      select(val);
    }
  }
);
</script>

<style>
/* .chip-activo {
  --p-chip-background: #2563EB;
  --p-chip-color: #FFFFFF;
  transition: all 0.3s ease;
}

.chip-inactivo {
  --p-chip-background: #9CA3AF;
  --p-chip-color: #FFFFFF;
  transition: all 0.3s ease;
}

.chip-activo:hover,
.chip-inactivo:hover {
  opacity: 0.85;
  cursor: pointer;
} */
</style>

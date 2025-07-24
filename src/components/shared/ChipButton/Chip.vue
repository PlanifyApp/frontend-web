<template>
  <div class="flex gap-2 border-2 border-dashed border-orange-500 p-2 rounded-md">
    <button
      v-for="option in options"
      :key="option.value"
      @click="select(option.value)"
      :class="[
        'flex items-center gap-1 px-4 py-1.5 rounded-md text-white font-medium transition',
        modelValue === option.value ? option.activeClass ?? 'bg-blue-600' : 'bg-gray-400'
      ]"
    >
      <span v-if="option.icon">{{ option.icon }}</span>
      <span>{{ option.label }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, watch } from 'vue'
import type { ChipOption } from './Chip.types'
import { useChip } from './useChip'

const props = defineProps<{
  modelValue: string
  options: ChipOption[]
}>()

const emit = defineEmits(['update:modelValue'])

const { selected, select } = useChip(props.options, props.modelValue)

watch(selected, (val) => emit('update:modelValue', val))
watch(() => props.modelValue, (val) => {
  if (val !== selected.value) {
    select(val)
  }
})
</script>

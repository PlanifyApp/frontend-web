<template>
  <FloatLabel variant="on">
    <Select
      v-model="model"
      :options="props.options"
      :optionLabel="props.optionLabel"
      :optionValue="props.optionValue"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :class="[
        'tw-w-full focus:!tw-border-primary',
        { 'p-invalid': isInvalid }
      ]"
      filter
      showClear
      variant="filled"
    ></Select>
    <label for="on_label">{{ props.label }}</label>
  </FloatLabel>

  <Message
    v-if="isInvalid && props.message"
    :severity="props.severity || 'info'"
    size="small"
    variant="simple"
  >
    {{ props.message }}
  </Message>
</template>

<script setup lang="ts">
import Select from "primevue/select";
import FloatLabel from "primevue/floatlabel";
import Message from "primevue/message";
import { computed } from "vue";
import { SelectProps } from "./Select";

const props = defineProps<SelectProps>();
const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

const isInvalid = computed(() => {
  return props.showMessage && (model.value === null || model.value === '' || model.value === undefined)
})
</script>

<style scoped>
/* p-invalid aplica borde rojo en PrimeVue, pero puedes ajustar más aquí si quieres */
</style>

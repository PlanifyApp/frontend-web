<template>
  <FloatLabel variant="on">
    <InputText
      v-model="props.value"
      :placeholder="props.placeholder"
      :type="props.type"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :invalid="props.showMessage"
      class="tw-w-full focus:!tw-border-primary"
    />
    <label for="on_label">{{ props.label }}</label>
  </FloatLabel>
  <Message
    v-if="props.showMessage"
    :severity="props.severity"
    size="small"
    variant="simple"
    >{{ props.message }}</Message
  >
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Message from "primevue/message";
import { InputTextProps } from "./InputText";

const props = defineProps<InputTextProps>();
</script>
<style>
.p-floatlabel:has(input:focus) label {
  color: #007dc3 !important;
}
</style>

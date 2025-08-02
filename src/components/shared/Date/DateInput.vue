<script setup lang="ts">
import { ref } from 'vue'
import { DateInputProps } from './dateinput'
import DatePicker from 'primevue/datepicker' // ✅ Importas el componente

const props = defineProps<DateInputProps>()

const icondisplay = ref<Date | null>(null)
const templatedisplay = ref<Date | null>(null)

document.documentElement.style.setProperty('--p-datepicker-date-selected-background', '#0070c9')
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Fecha con ícono por defecto -->
    <div class="flex-auto">
      <DatePicker
        v-model="icondisplay"
        showIcon
        iconDisplay="input"
        inputId="icondisplay"
        :placeholder="props.datePlaceholder"
        class="w-full"
      />
    </div>

    <!-- Hora con ícono personalizado -->
    <div class="flex-auto">
      <DatePicker
        v-model="templatedisplay"
        showIcon
        iconDisplay="input"
        timeOnly
        inputId="templatedisplay"
        :placeholder="props.timePlaceholder"
        class="w-full"
      >
        <template #inputicon="slotProps">
          <i class="pi pi-clock cursor-pointer" @click="slotProps.clickCallback" />
        </template>
      </DatePicker>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-inputtext) {
  --p-inputtext-focus-border-color: #007DC3 !important;
  --p-datepicker-date-selected-background: #0070c9 !important;
}

:root {
  --p-inputtext-focus-border-color: #007DC3;
  --p-datepicker-date-selected-background: #0070c9 !important;
}
</style>

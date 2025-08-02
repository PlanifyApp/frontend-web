<template>
  <!-- Esta vista va a ser de pruebas para los componentes creados -->
  <div>alo buenas, me chupan la monda todos.</div>

  <div class="tw-w-56 flex flex-col gap-4">
    <Button label="Guardar" type="primary" />
    <Button label="Cancelar" type="secondary" icon="times" icon-pos="right" />
    <Button label="Eliminar" type="tertiary" icon="trash" />

    <!-- Uso del componente DateInput -->
    <DateInput
      datePlaceholder="Selecciona una fecha"
      timePlaceholder="Selecciona una hora"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Button from "@/components/shared/Button/Button.vue";
// import RadioButton from "@/components/shared/RadioButton/RadioButton.vue";
// import Chip from "@/components/shared/ChipButton/Chip.vue";
// import Checkbox from '@/components/shared/Checkbox/Checkbox.vue';
// import Switch from '@/components/shared/Switch/Switch.vue';
// import { ChipOption } from "@/components/shared/ChipButton/Chip.types";
import DateInput from "../components/shared/Date/DateInput.vue";
import Calendar from 'primevue/calendar';

const selectedDate = ref<Date | null>(null);
const selectedTime = ref<Date | null>(null);

// const seleccion = ref("");

// const chipSeleccion = ref("yes");

// const chipOptions: ChipOption[] = [
//   { label: "Yes", value: "yes", icon: "✓", activeClass: "tw-border tw-rounded tw-h-[100] tw-w-[60px] " },
//   { label: "No", value: "no", icon: "✕", activeClass: "tw-border tw-rounded tw-h-[100] tw-w-[60px] " },
// ];
// const checkbox1 = ref(false);
// const checkbox2 = ref(true);
// const switchValue = ref(false);
</script>

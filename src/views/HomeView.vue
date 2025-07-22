<template>
<!-- Esta vista va a ser de pruebas para los componentes creados -->
  <div>
    alo buenas, me chupan la monda todos.
  </div>
  <div class="tw-w-56">
    <Button label="Guardar" type="primary" />
    <Button label="Cancelar" type="secondary" icon="times" icon-pos="right" />
    <Button label="Eliminar" type="tertiary" icon="trash" />
  </div>

  <div>
    EL de arriba me chupa la chupa
  </div>
  <div>
    <Checkbox v-model="checkbox1" label="Aceptar términos" type="primary" />
    <Checkbox v-model="checkbox2" label="Recibir correos" type="secondary" />
  </div>

  <div class="tw-mt-4 tw-space-y-2">
    <h2 class="tw-font-bold">Radio Buttons</h2>
    <RadioButton v-model="seleccion" value="opcion1" label="Opción 1" />
    <RadioButton v-model="seleccion" value="opcion2" label="Opción 2" />

     <div class="tw-space-y-2">
      <h2 class="tw-font-bold">Chip Selector</h2>
      <Chip :options="chipOptions" v-model="chipSeleccion" />
      <p class="tw-text-sm">Seleccionado: {{ chipSeleccion }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/shared/Button/Button.vue";
import RadioButton from "@/components/shared/RadioButton/RadioButton.vue";
import Chip from "@/components/shared/ChipButton/Chip.vue";
import Checkbox from '@/components/shared/Checkbox/Checkbox.vue';
import { ChipOption } from "@/components/shared/ChipButton/Chip.types";

const seleccion = ref("");

const chipSeleccion = ref("yes");

const chipOptions: ChipOption[] = [
  { label: "Yes", value: "yes", icon: "✓", activeClass: "tw-border tw-rounded tw-h-[100] tw-w-[60px] " },
  { label: "No", value: "no", icon: "✕", activeClass: "tw-border tw-rounded tw-h-[100] tw-w-[60px] " },
];



const checkbox1 = ref(false);
const checkbox2 = ref(true);
</script>

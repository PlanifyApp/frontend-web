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

  <div class="tw-mt-4">
    <Switch v-model="switchValue" type="primary" />
  </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue';
import Button from '@/components/shared/Button/Button.vue';
import Checkbox from '@/components/shared/Checkbox/Checkbox.vue';
import Switch from '@/components/shared/Switch/Switch.vue';

const checkbox1 = ref(false);
const checkbox2 = ref(true);
const switchValue = ref(false);
watch(switchValue, (newValue) => {
  console.log('Switch value changed:', newValue);
});
</script>

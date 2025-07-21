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
</template>

<script setup lang="ts">
import Button from '@/components/shared/Button/Button.vue';
import Checkbox from '@/components/shared/Checkbox/Checkbox.vue';
import { ref } from 'vue';

const checkbox1 = ref(false);
const checkbox2 = ref(true);
</script>

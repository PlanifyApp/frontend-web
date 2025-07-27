<template>
  <Chip
    :label="props.label"
    :icon="props.icon ? `pi pi-${props.icon}` : undefined"
    :value="props.value"
    :select="props.select"
    :disabled="props.disabled"
    :class="chipClass"
    class="!tw-bg-primary !tw-text-white"
    :pt="{
      root:{
        style: iconColor,
      }
    }"
  />
</template>

<script lang="ts" setup>
import { ChipProps } from "./Chip";
import Chip from 'primevue/chip';
import { useChip } from "./useChip";


const props = withDefaults(defineProps<ChipProps>(), {
  label: "",
  icon: undefined,
  value: "",
  select: undefined,
  type: "primary",
  disabled: false,
});

const { chipClass, iconColor } = useChip(props);

</script>

<style>
 /* .p-chip {
  background-color: transparent !important;
  color: white !important;
} */

/* span.p-chip-icon {
  color: white !important;
} */

</style>

<template>
  <Button
    :class="buttonClass()"
    :label="props.label"
    :type="props.typeButton"
    :icon="props.icon ? `pi pi-${props.icon}` : undefined"
    :iconPos="props.iconPos ? props.iconPos : 'left'"
    :disabled="props.disabled"
  />
</template>

<script lang="ts" setup>
import { ButtonProps } from "./Button";
import Button from "primevue/button";
import { useButton } from "./useButton";

const props = withDefaults(defineProps<ButtonProps>(), {
  label: "Default 123",
  type: "primary",
  typeButton: "button",
  disabled: false,
  icon: undefined,
  iconPos: undefined,
});

const { buttonClass } = useButton(props);

</script>

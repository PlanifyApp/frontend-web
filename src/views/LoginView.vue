<template>
<div class="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-h-screen">
  <!-- Contenedor principal con imagen de fondo en mobile -->
  <div
    class="tw-relative tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full md:tw-w-1/2 tw-p-6"
  >
    <!-- Imagen como fondo en mobile -->
    <img
      :src="imgPrincipalLogin"
      alt="Imagen decorativa"
      class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-opacity-100 md:tw-hidden"
    />

    <!-- Capa blanca para contenido -->
    <div
      class="tw-relative tw-w-full tw-max-w-md tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-8 tw-space-y-6"
    >
      <!-- Logo -->
      <img :src="imgLogoPlanify" alt="Logo Planify" class="tw-w-40 tw-mx-auto" />

      <!-- Título -->
      <h1 class="tw-text-2xl tw-tracking-widest tw-font-light tw-text-center">Bienvenido</h1>

      <!-- Formulario -->
      <form class="tw-space-y-4">
        <InputText
          label="Correo"
          placeholder="Ingrese el correo"
          type="email"
          value="email"
        />

        <InputText
          label="Contraseña"
          placeholder="Ingrese la Contraseña"
          type="password"
          value="password"
        />

        <div class="tw-text-center">
          <a
            href="#"
            class="tw-text-xs tw-tracking-wider tw-text-blue-600 hover:tw-underline"
          >¿Olvidó su contraseña?</a>
        </div>

        <CustomButton
          label="Iniciar Sesión"
          class="tw-w-full"
          typeButton="submit"
        />

        <CustomButton
          label="Iniciar Sesión con Google"
          class="tw-w-full"
          icon="google"
        />
      </form>

      <div class="tw-text-sm tw-text-center tw-tracking-wider">
        ¿No tienes una cuenta?
        <a href="#" class="tw-text-blue-600 hover:tw-underline">Regístrate</a>
      </div>
    </div>
  </div>

  <!-- Imagen al lado derecho en desktop -->
  <div class="tw-hidden md:tw-block md:tw-w-1/2">
    <img
      :src="imgPrincipalLogin"
      alt="Imagen decorativa"
      class="tw-w-full tw-h-full tw-object-cover"
    />
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputText from '@/components/shared/InputText/InputText.vue'
import CustomButton from '@/components/shared/Button/Button.vue'
import logo from '@/assets/LogoPlanifyCompleto.png'

const imgLogoPlanify = logo
const imgPrincipalLogin = "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0"
const email = ref('')
const password = ref('')
</script>
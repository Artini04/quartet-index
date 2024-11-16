<script setup lang="ts">
import type { NuxtError } from "#app"

const p = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: "/" })
</script>

<template>
  <main>
    <h2>{{ error.statusCode }}</h2>
    <input type="button" value="Go back home" @click="handleError" />
  </main>
</template>

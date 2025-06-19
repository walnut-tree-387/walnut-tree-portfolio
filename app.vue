<template>
  <ColorScheme tag="div">
    <div :class="{ 'dark': $colorMode.value === 'dark' }">
      <NuxtLayout>
        <NuxtPage />
        <Toaster class="pointer-events-auto" position="bottom-right"  />
      </NuxtLayout>
    </div>
  </ColorScheme>
</template>
<script setup>
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'
</script>

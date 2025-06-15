<template>
   <div
    class="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105 cursor-pointer max-w-xs mx-auto"
  >
    <img
      :src="src"
      :alt="title"
      class="w-full h-auto object-cover"
      loading="lazy"
    />
    <div
      class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-sm font-medium"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  title: string
}>()

const { src, title } = props
</script>

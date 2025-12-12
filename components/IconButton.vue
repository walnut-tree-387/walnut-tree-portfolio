<template>
  <Button
    class="rounded-full aspect-square p-1 bg-transparent text-gray-400 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-500 transition"
    :size="size"
    v-bind="$attrs"
  >
    <Icon :name="name" class="w-4 h-4"/>
  </Button>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  size?: "sm" | "lg" | "default" | "icon" | null | undefined
}>()
</script>

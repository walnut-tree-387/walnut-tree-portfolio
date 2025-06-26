<template>
  <div ref="background" class="flex bg-black dark:bg-transparent">
    <div
      ref="sceneContainer"
      class="flex items-center justify-center w-full h-screen"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useBackgroundAnimation } from '@/composables/useBackgrounComposable'

const sceneContainer = ref<HTMLElement | null>(null)
const background = ref<HTMLElement | null>(null)

onMounted(() => {
  if (background.value) {
    const { init } = useBackgroundAnimation()
    init(background.value)
  }
})
</script>

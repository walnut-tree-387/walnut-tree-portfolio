<template>
  <div ref="containerRef" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { ImageCarouselService } from '../composables/services/ImageCarouselService'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const containerRef = ref<HTMLElement | null>(null)
let carouselService: ImageCarouselService
let controls: OrbitControls

onMounted(async () => {
  if (!containerRef.value) return

  
})

onBeforeUnmount(() => {
})


</script>

<style scoped>
div {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
canvas {
  display: block;
}
</style>

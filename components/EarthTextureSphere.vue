<template>
  <div ref="containerRef" class="w-full h-screen relative overflow-hidden" />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { useEarthTextureSphere } from '../composables/useEarthTextureSphere'
import { StarService } from '../composables/services/StarService'

const colorMode = useColorMode()
const containerRef = ref<HTMLElement | null>(null)

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let cleanup: () => void
onMounted(() => {
  if (!containerRef.value) return

  scene = new THREE.Scene()

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  containerRef.value.appendChild(renderer.domElement)
  const starService = new StarService(scene);
  starService.addStars()
  const setup = useEarthTextureSphere(containerRef.value, scene, renderer)
  cleanup = setup.cleanup


  // Changing star color for visibility depending on the theme
  watch(() => colorMode.value, (newMode) => {
  if (newMode === 'dark') {
    starService.updateStarsColor(0xffffff)
  } else {
    starService.updateStarsColor(0x333366)
  }
}, { immediate: true })
})

onBeforeUnmount(() => {
  if (cleanup) cleanup()
})
</script>

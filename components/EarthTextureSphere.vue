<template>
  <div ref="containerRef" class="w-full h-screen relative overflow-hidden" />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { useEarthTextureSphere } from '../composables/useEarthTextureSphere'
import { LightService } from '../composables/services/LightService'
const containerRef = ref<HTMLElement | null>(null)

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let cleanup: () => void

onMounted(() => {
  if (!containerRef.value) return

  scene = new THREE.Scene()

  const lightService = new LightService()
  const directionalLight = lightService.getDirectionalLightSource() 
    const lightIndicator = new THREE.Mesh(
    new THREE.SphereGeometry(1),
    new THREE.MeshStandardMaterial({
        color: 0xffff00,
        emissive: 0xffff00,
        emissiveIntensity: 1
    })
    )
  scene.add(lightIndicator)
  scene.add(directionalLight)
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  containerRef.value.appendChild(renderer.domElement)

  const setup = useEarthTextureSphere(containerRef.value, scene, renderer)
  cleanup = setup.cleanup
})

onBeforeUnmount(() => {
  if (cleanup) cleanup()
})
</script>

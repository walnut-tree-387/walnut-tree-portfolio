<template>
  <div class="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800 transition-all">
    <div class="aspect-[9/16] w-full">
      <video
        ref="videoRef"
        :src="src"
        class="w-full h-full object-cover"
        @click="togglePlay"
        controls
        autoplay
        muted
        loop
      ></video>
    </div>

    <div class="absolute bottom-2 right-2 flex gap-2 z-10">
      <button
        class="bg-black bg-opacity-50 p-1 rounded-full text-white"
        @click.stop="togglePlay"
      >
        <Icon :name="isPlaying ? 'mdi:pause' : 'mdi:play'" class="w-5 h-5" />
      </button>
      <button
        class="bg-black bg-opacity-50 p-1 rounded-full text-white"
        @click.stop="enterFullscreen"
      >
        <Icon name="mdi:fullscreen" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ src: string }>()

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)

const togglePlay = () => {
  if (!videoRef.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}

const enterFullscreen = () => {
  const video = videoRef.value
  if (video?.requestFullscreen) {
    video.requestFullscreen()
  }
}
</script>

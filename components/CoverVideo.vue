<template>
  <div>
    <video
      ref="videoRef"
      loop
      playsinline
      class="w-full object-cover rounded-lg"
      :class="{
        'aspect-square': true,
        'md:aspect-video': true
      }"
    >
      <source src="https://res.cloudinary.com/dmtpylpbb/video/upload/w_720,c_scale/cover2_nokkcg" type="video/mp4" />
    </video>

    <audio
      ref="audioRef"
      loop
      src="/background_music.mp3"
    ></audio>

    <div class="mt-4 text-center">
      <Button size="lg" @click="toggleMedia" class="p-2 bg-black dark:bg-gray-200 text-white dark:text-black">
        {{ isPlaying ? 'Pause' : 'Play' }}
        <Icon :name="isPlaying ? 'mdi:pause' : 'mdi:play'" class="w-3 h-3" />
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const audioRef = ref(null)
const videoRef = ref(null)
const isPlaying = ref(false)

function toggleMedia() {
  if (!audioRef.value || !videoRef.value) return

  if (!isPlaying.value) {
    // Play both
    audioRef.value.muted = false
    videoRef.value.muted = false
    audioRef.value.play()
    videoRef.value.play()
    isPlaying.value = true
  } else {
    // Pause both
    audioRef.value.pause()
    videoRef.value.pause()
    isPlaying.value = false
  }
}
</script>

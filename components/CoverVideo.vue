<template>
  <div class="relative rounded-lg overflow-hidden aspect-[21/9] group">
    <video
      ref="videoRef"
      loop
      playsinline
      class="w-full object-cover rounded-lg"
      :class="{
        'aspect-[23/9]': true,
        'md:aspect-video': false
      }"
    >
      <source
        src="https://res.cloudinary.com/dmtpylpbb/video/upload/w_720,c_scale/cover2_nokkcg"
        type="video/mp4"
      />
    </video>
    <audio
      ref="audioRef"
      loop
      src="/background_music.mp3"
    ></audio>

  <IconButton
    :size="'lg'"
    @click="toggleMedia"
    :name="isPlaying ? 'mdi:pause' : 'mdi:play'"
    class=" absolute inset-4 m-auto  p-3 w-10 h-10 opacity-35 bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
  />
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

<template>
  <div class="relative w-full aspect-[9/16]">
    <!-- Spinner shown while loading -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-black/10 z-10"
    >
      <svg
        class="animate-spin h-6 w-6 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        ></path>
      </svg>
    </div>

    <!-- Cloudinary Image -->
  <CldImage
      :src="src"
      :alt="title"
      width="600"
      height="900"
      class="w-full h-full object-cover"
      loading="lazy"
      @load="isLoading = false"
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

const isLoading = ref(true)
</script>

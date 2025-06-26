<template>
<div class="flex flex-col w-full overflow-auto pb-4 items-center justify-start
   bg-gray-100 text-black dark:bg-gray-900 dark:text-white min-h-screen">
  <div class="flex flex-col items-center justify-center w-full max-w-md">
    <AnimatedBio />
  </div>
  <!-- <CoverVideo /> -->
  <!-- <AnimatedImageSlider /> -->
   <EarthTextureSphere />
  <div class="absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <AccessTokenForm />
  </div>
</div>
</template>
<script setup>

definePageMeta({ 
  layout: 'auth',
})
</script>
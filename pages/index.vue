<template>
<div class="flex flex-col w-full col items-center justify-start bg-gray-100 text-black dark:bg-gray-900 dark:text-white min-h-screen">
  <div class="mb-5 flex flex-col items-center justify-center w-full max-w-md">
    <AnimatedBio />
  </div>
  <!-- <CoverVideo /> -->
  <AnimatedImageSlider />
  <div class="mt-5 flexw-full max-w-md">
    <AccessTokenForm />
  </div>
</div>
</template>
<script setup>

definePageMeta({ 
  layout: 'auth',
})
</script>
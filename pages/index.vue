<template>
<div class="flex flex-col w-full col items-center justify-start bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-4 min-h-screen">
  <div class="mb-20 flex flex-col p-4 items-center justify-center w-full max-w-md">
    <AnimatedBio />
  </div>
  <CoverVideo />
  <div class="mt-20 flex p-4 w-full max-w-md">
    <AccessTokenForm />
  </div>
</div>
</template>
<script setup>

definePageMeta({ 
  layout: 'auth',
})
</script>
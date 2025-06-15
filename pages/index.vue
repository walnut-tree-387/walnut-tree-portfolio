<template>
<div class="flex flex-col w-full col items-center justify-start bg-white text-black dark:bg-gray-900 dark:text-white p-4 min-h-screen">
  <div>
    <CoverVideo />
  </div>
  <div class="mt-10 p-4 w-full max-w-md">
    <AccessTokenForm />
  </div>
</div>
</template>
<script setup>

definePageMeta({ 
  layout: 'auth',
})
</script>
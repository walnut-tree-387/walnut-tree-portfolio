<template>
  <div class="bg-teal-100">
    <ClientOnly>
      <PortfolioLandingAnimation v-if="showLanding"/>
    </ClientOnly>

    <div v-if="!showLanding">
      <PortfolioNav class="fixed top-0 left-0 right-0 z-50" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const showLanding = ref(true)

onMounted(() => {
  if (!import.meta.client) return
  const hasSeenLanding = localStorage.getItem('landing-complete')
  if (hasSeenLanding) {
    showLanding.value = false
    return
  }

  setTimeout(() => {
    showLanding.value = false
    localStorage.setItem('landing-complete', 'true')
  }, 7000)
})
</script>

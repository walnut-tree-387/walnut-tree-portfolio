<template>
  <div class="relative h-screen w-100vw overflow-hidden">
    <div class="-z-10 absolute inset-0 bg-amber-100 wave-divider1 pointer-events-none">
    </div>
    <div class="-z-10 absolute inset-0 bg-amber-800 wave-divider2 pointer-events-none">
    </div>
    <PortfolioProjectList />
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.wave-divider1 {
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 60%);
}
.wave-divider2 {
  clip-path: polygon(0 60%, 100% 35%, 100% 100%, 0 100%);
}
</style>

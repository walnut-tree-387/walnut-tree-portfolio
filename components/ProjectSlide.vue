<template>
  <div class="relative flex justify-center items-center h-screen w-100vw overflow-hidden">
    <span class="z-30">Project Slide</span>
    <div class="absolute inset-0 bg-amber-100 wave-divider1"></div>
    <div class="absolute inset-0 bg-amber-800 wave-divider2"></div>
  </div>
</template>

<style scoped>
.wave-divider1 {
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 60%);
}
.wave-divider2 {
  clip-path: polygon(0 60%, 100% 35%, 100% 100%, 0 100%);
}
</style>

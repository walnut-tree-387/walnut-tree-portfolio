<template>
    <h1 ref="line1" class="text-md md:text-3md font-italic mb-6 text-black dark:text-white">
      An old walnut, knot by knot, shred by shred
    </h1>
    <h1 ref="line2" class="text-sm md:text-3sm font-italic text-black dark:text-white">
      Neither you are aware of this, nor the police.
    </h1>
    <AnimatedImageSlider />
</template>

<script setup lang="ts">
const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)
const gsap  = useGSAP()

onMounted(() => {
  gsap.from(line1.value, { 
    scrollTrigger: { trigger: line1.value, start: 'top 60%' }, 
    opacity: 0, 
    markers: true,
    once: true,
    y: 200, 
    duration: 2.5
  })
gsap.from(line2.value, { 
    scrollTrigger: { trigger: line2.value, start: 'top 78%' }, 
    opacity: 0, 
    y: 300, 
    once: true,
    markers: true,
    duration:2.5
  })
})
</script>
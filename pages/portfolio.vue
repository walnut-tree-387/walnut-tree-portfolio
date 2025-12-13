<template>
  <div class="slides-wrapper h-screen w-100vw overflow-hidden">
    <PortfolioHome class="slide" />
    <ExperienceSlide class="slide" />
    <ProjectSlide class="slide project-slide" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "bio" })
const gsap = useGSAP()
onMounted(() => {
  const sections = gsap.utils.toArray<HTMLElement>(".slide")
  const total = sections.length

  gsap.to(sections, {
    yPercent: -100 * (total - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slides-wrapper",
      start: "top top",
      end: () => `+=${window.innerHeight * (total - 1)}`,
      pin: true,
      scrub: 1,
      snap: {
        snapTo: 1 / (total - 1),
        duration: { min: 0.2, max: 0.4 },
        ease: "power1.inOut"
      }
    }
  })
})
</script>

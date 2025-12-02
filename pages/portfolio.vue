<template>
    <div class="flex flex-col slides-wrapper">
      <PortfolioHome class="firstSlide" />
      <ExperienceSlide class="secondSlide" />
  </div>
</template>
<script setup lang="ts">
  definePageMeta({ 
    layout: 'bio',
  })
  const gsap = useGSAP()
  onMounted(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: 'power1.inOut',
        duration: 3
      },
      scrollTrigger: {
        trigger: '.slides-wrapper',
        start: '25% center',
        end: 'end end',
        toggleActions: 'play none none reset',
        // markers: true,
        scrub: true,
      }
    })
    timeline.to('.secondSlide', {
      y: -800
    })
  })
</script>
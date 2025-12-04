<template>
    <div class="slides-wrapper h-100vh">
      <PortfolioHome class="slide" />
      <ExperienceSlide class="slide" />
    </div>
</template>
<script setup lang="ts">
  definePageMeta({ 
    layout: 'bio',
  })
  const gsap = useGSAP()
  onMounted(() => {
    let sections = gsap.utils.toArray(".slide")
    console.log(sections)
    const timeline = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 1
      },
      scrollTrigger: {
        trigger: '.slides-wrapper',
        start: "top top",
        end: () => "+=" + window.innerHeight * (sections.length - 1),
        snap: 1 / (sections.length - 1),
        scrub: true,
        pin: true,
        markers: true
      }
    })
    sections.forEach((sectin, i) => {
      timeline.to(sections, { 
        yPercent: -100 * i
      })
    })
  })
</script>
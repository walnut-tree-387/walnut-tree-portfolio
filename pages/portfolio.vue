<template>
    <div class="slides-wrapper h-screen w-100vw">
      <PortfolioHome class="slide" />
      <ExperienceSlide class="slide" />
    </div>
</template>
<script setup>
  definePageMeta({ 
    layout: 'bio'
  })
  const gsap = useGSAP()
  onMounted(() => {
    let sections = gsap.utils.toArray(".slide")
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
      }
    })
    sections.forEach((section, i) => {
      timeline.to(sections, { 
        yPercent: -100 * i
      })
    })
  })
</script>
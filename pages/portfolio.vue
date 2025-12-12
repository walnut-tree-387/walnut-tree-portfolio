<template>
  <div class="slides-wrapper h-screen w-100vw overflow-hidden">
    <PortfolioHome class="slide" />
    <ExperienceSlide class="slide" />
    <ProjectSlide class="slide project-slide" />
  </div>
</template>

<script setup>
definePageMeta({ layout: "bio" })

const gsap = useGSAP()

onMounted(() => {
  const sections = gsap.utils.toArray(".slide")

  // --- MAIN SLIDE SCROLL (SNAP FULL SCREEN SECTIONS) ---
  gsap.to(".slides-wrapper", {
    yPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slides-wrapper",
      start: "top top",
      end: () => "+=" + window.innerHeight * (sections.length - 1),
      scrub: true,
      snap: 1 / (sections.length - 1), // snapping full screen
      pin: true,
    }
  })

  // --- PROJECT SLIDE ANIMATION (enter & exit from left) ---
  gsap.fromTo(
    ".project-slide",
    { xPercent: -100, opacity: 0 },
    {
      xPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".project-slide",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      }
    }
  )

  // Exit to LEFT when scrolling UP
  gsap.to(".project-slide", {
    xPercent: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".project-slide",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  })
})
</script>

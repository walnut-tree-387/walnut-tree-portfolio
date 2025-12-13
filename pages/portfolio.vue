<template>
  <div class="slides-wrapper h-screen w-100vw overflow-hidden flex">
    <PortfolioHome class="slide h-screen w-screen flex-shrink-0" />
    <ExperienceSlide class="slide h-screen w-screen flex-shrink-0" />
    <ProjectSlide class="slide project-slide h-screen w-screen flex-shrink-0" />
    <CarSvg id="car" class="absolute z-30 bottom-0 left-0"/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "bio" })
const gsap = useGSAP()
let isAnimating = false
let lastSlideIndex = 0

const handleSlideChange = (newSlideIndex: any) => {
  const dir = newSlideIndex > lastSlideIndex ? 1 : -1
  lastSlideIndex = newSlideIndex;

  if (isAnimating) return
  isAnimating = true

  const leftX = 0
  const rightX = window.innerWidth - 40

  const carStartPos = dir === 1 ? leftX : rightX
  const carEndPos   = dir === 1 ? rightX : leftX

  gsap.fromTo("#car",
    {
      x: carStartPos,
      rotationY: dir === 1 ? 0 : 180
    },
    {
      x: carEndPos,
      duration: 1,
      ease: "power2.inOut",
      onComplete() {
        isAnimating = false
      }
    }
  )
};

onMounted(() => {
  const sections = gsap.utils.toArray<HTMLElement>(".slide")
  const totalSlides = sections.length
  gsap.to(sections, {
    xPercent: -100 * (totalSlides - 1),
    ease: "none",
    scrollTrigger: {
      id: "portfolio-slides",
      trigger: ".slides-wrapper",
      pin: true,
      scrub: 1,
      snap: 1 / (totalSlides - 1),
      start: "top top",
      end: () => `+=${window.innerWidth * (totalSlides - 1)}`,

      onUpdate(self) {
        const slideIndex = Math.round(self.progress * (totalSlides - 1))
        if (slideIndex !== lastSlideIndex) {
          handleSlideChange(slideIndex)
        }
      }
    }
  });
})
</script>

<template>
  <div class="w-full px-8 py-16 flex flex-col items-center gap-10 font-primary text-gray-800">
    <h2
      class="text-xl font-bold border-b border-gray-800 border-dashed pb-4 w-full max-w-5xl text-center"
    >
      Research And Acheivements
    </h2>

    <div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="rounded-lg p-5 shadow-sm hover:-translate-y-0.5">
        <h3 class="text-lg text-center font-semibold mb-2">
          Manuscript in Preparation
        </h3>
        <p class="publication text-sm leading-relaxed">
          <strong>Text2Cypher and Knowledge Graphs for Crime Analytics in Bangladesh</strong>
        </p>
        <p class="publication text-xs mt-2">
          Research focuses on NLP-driven Text-to-Cypher generation over domain-specific
          knowledge graphs for structured crime data analysis.
        </p>
      </div>
      <div class="rounded-lg p-5 shadow-sm hover:-translate-y-0.5">
        <h3 class="text-lg text-center font-semibold mb-2">
          NST Fellowship (2023 – 2024)
        </h3>
        <p class="awards text-sm leading-relaxed">
          Awarded by the <strong>Ministry of Science and Technology, Bangladesh</strong>
          for academic excellence and research potential.
        </p>
        <p class="awards text-xs mt-4">
          Associated with <strong>Jahangirnagar University</strong>
          - March 2024
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SplitText } from "gsap/SplitText"
const gsap = useGSAP()
const animateText = () => {
  const publication = SplitText.create('.publication', { type: 'chars' })
  const awards = SplitText.create('.awards', { type: 'chars' })

  const tl = gsap.timeline({ paused: false })
  tl.from(publication.chars, {
    duration: 3,              
    opacity: 0,
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.05,           
      ease: "none",
    },
  }, 0)
  tl.from(awards.chars, {
    duration: 3,              
    opacity: 0,
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.05,           
      ease: "none",
    },
  }, 0)
}
onMounted(() => {
  animateText()
})
</script>

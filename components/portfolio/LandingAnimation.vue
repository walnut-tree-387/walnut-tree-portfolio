<template>
  <svg
    viewBox="0 0 1200 300"
    class="w-full h-screen"
  >
    <text
      id="walnut-text"
      x="200"
      y="180"
      font-size="80"
      font-weight="700"
      fill="none"
      stroke="#3B5D50"
      stroke-width="3"
    >
      Walnut Tree
    </text>
    <g id="car">
      <CarSvg />
    </g>
  </svg>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'

const emit = defineEmits(['done'])

onMounted(() => {
  const text = document.querySelector('#walnut-text') as SVGTextElement
  const car = document.querySelector('#car')
  const length = text.getComputedTextLength()
  gsap.set(text, {
    strokeDasharray: length,
    strokeDashoffset: length
  })
  const tl = gsap.timeline({
    onComplete: () => emit('done')
  })
  tl.set(car, {scale: 2.5})
  tl.fromTo(car, { x: -200, y: 200 }, { x: 600, y:200, duration: 1, ease: 'power2.out' })
  .to(
    text,{
      strokeDashoffset: 0,
      duration: 1,
      ease: 'power1.inOut'
    },'<'
  ).to(car, {
    x: 1200,
    duration: 1,
    ease: 'power2.in'
  })
})
</script>


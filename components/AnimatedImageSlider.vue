<template>
  <div
    ref="sliderContainer"
    class="flex items-center mt-10 justify-center p-4 bg-grey-100 dark:bg-grey-700 w-full"
  >
    <div
      ref="slider"
      class="relative flex justify-center items-center rounded-full"
      :style="{
        width: circleSize + 'px',
        height: circleSize + 'px',
        touchAction: 'pan-y' 
      }"
    >
      <div
        v-for="(img, i) in images"
        :key="i"
        class="absolute rounded-full bg-cover bg-center transition-transform duration-300 border-2 border-white shadow-md"
        :ref="el => imageRefs[i] = el"
        :class="['w-16 h-16', 'md:w-20 md:h-20', 'lg:w-[5.5rem] lg:h-[5.5rem]']"
        :style="[getPositionStyle(i, images.length), { backgroundImage: `url(${img})` }]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
const circleSize = ref(300)
const getPositionStyle = (index, total) => {
  const radius = circleSize.value / 2 - 40
  const angle = (index / total) * 2 * Math.PI
  const x = radius * Math.cos(angle)
  const y = radius * Math.sin(angle)
  return {
    transform: `translate(${x}px, ${y}px)`
  }
}
const slider = ref(null)
const cloudName = 'dmtpylpbb'
const imageIds = [
  '1000419068_lybsyy',
  'DSCF4449_yacnlv',
  'DSCF4549_git5v2',
  'DSCF4519_jx3yip',
  'DSCF4581_c1k6lb',
  'DSCF4566_vgjaox'
]

const images = imageIds.map(
  id => `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${id}.jpg`
)

const imageRefs = ref([])
function getResponsiveTransform() {
  const w = window.innerWidth

  if (w < 640) {
    return { scale: 3.0, x: 0, y: 0 }
  } else if (w < 1024) {
    return { scale: 3.5, x: 0, y: 0 }
  } else {
    return { scale: 4.0, x: 0, y: 0 }
  }
}
onMounted(() => {
  gsap.set(imageRefs.value, { scale: 0, opacity: 0 })
  const { scale, x, y } = getResponsiveTransform()
  gsap.to(imageRefs.value, {
    scale: scale,
    x: x,
    y: y,
    opacity: 1,
    duration: 2,
    stagger: 0.5,
    ease: 'back.out(0.7)',
  })
  imageRefs.value.forEach((el) => {
    Draggable.create(el, {
      type: 'x,y',
      bounds: slider.value, 
      inertia: true,      
      edgeResistance: 0.75,
      onPress() {
        gsap.to(el, { scale: 1.2, duration: 0.3, ease: 'power2.out' })
      },
      onRelease() {
        gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.inOut' })
      }
    })
  })
})
</script>

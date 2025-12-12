<template>
    <div class="grid grid-cols-2 h-screen w-100vw ">
        <div class="flex flex-col justify-center items-center bg-gray-700">
            <p class="name text-2xl font-extrabold font-mono text-gray-200">Ataur</p>
            <p class="name text-2xl font-extrabold font-mono text-gray-200">Rahaman</p>
            <ol class="interest text-md font-mono font-bold text-gray-200 pt-8 p-2">
                <li> Research Interest:</li>
                <li>@ NLP</li>
                <li>@ Knowledge graph</li>
                <li>@ Mining software repositories</li>
                <li>@ Software analytics</li>
            </ol>
        </div>
        <div class="flex flex-col justify-center items-center bg-gray-200">
            <section class="text-md font-mono font-bold text-gray-700 mb-10">Working with</section>
            <SpringBootSvg />
            <VueSvg/>
        </div>
        <div class="ataur absolute inset-x-10 top-20 md:inset-10 flex items-start justify-center">
            <div class="w-3/10 aspect-square rounded-full shadow-2xl z-10 overflow-hidden ">
                    <img 
                        src="/ataur.JPG" 
                        alt="Ataur Rahaman" 
                        class="w-full h-full object-cover"
                    />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { SplitText } from "gsap/SplitText"
const gsap = useGSAP()
const animateName = () => {
  const split = SplitText.create('.name', {
    type: 'chars'
  })

  gsap.from(split.chars, {
    yPercent: "random([-50, 50])",
    rotation: "random(-30, 30)",
    ease: 'back.out',
    duration: 1,
    repeat: -1,
    yoyo: true,
    stagger: {
      amount: 0.5,
      from: "random",
    }
  })
}
const animateInterest = () => {
    const interest = SplitText.create('.interest', { type: 'chars' })

  const tl = gsap.timeline({ paused: false })
  tl.from(interest.chars, {
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
    animateName()
    animateInterest()
})
</script>
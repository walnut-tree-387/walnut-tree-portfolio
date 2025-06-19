<template>
  <div class="relative w-full aspect-[9/16] ">
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-black/10 z-10"
    >
      <svg
        class="animate-spin h-6 w-6 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        ></path>
      </svg>
    </div>
    <CldImage
        :src="src"
        :alt="title"
        width="600"
        height="900"
        class="w-full h-full object-cover rounded-xl shadow-md"
        loading="lazy"
        @load="isLoading = false"
    />
    <div
      ref="animatedTitle"
      class="rounded-xl absolute top-0 left-0 right-0 bg-black text-white dark:text-white text-center p-2 text-sm font-medium"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const gsap = useGSAP();
const props = defineProps<{
  src: string
  title: string
}>()
const animatedTitle = ref<HTMLElement | null>(null)
const isLoading = ref(true)
onMounted(() => {
  if(props.title)animateText(props.title)

})
function animateText(text: string) {
  if (!animatedTitle.value) return
  animatedTitle.value.textContent = ''

  const chars = text.split('')
  let i = 0

  function addChar() {
    if (i < chars.length) {
      animatedTitle.value!.textContent += chars[i]
      i++
      setTimeout(addChar, 50)
    } else {
      gsap.fromTo(
        animatedTitle.value,
        { opacity: 0.5, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      )
    }
  }
  addChar()
}
</script>

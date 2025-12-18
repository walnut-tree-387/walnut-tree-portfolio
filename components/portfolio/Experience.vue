<template>
  <div class="text-scale font-primary text-gray-800 flex w-screen h-100vh items-center justify-center">
    <div class="p-2">
        <div class="flex flex-col items-center text-center p-2">
            <span class="text-lg font-semibold">{{ details?.companyName }}</span>
            <span class="text-md">{{ details?.period }}</span>
        </div>
        <div class="flex flex-wrap gap-2 text-center mt-2">
            <span
                v-for="skill in details?.skills"
                :key="skill"
                class="chip bg-amber-100 text-sm px-2 py-1 rounded-full"
                >
                {{ skill }}
            </span>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const gsap = useGSAP()
defineProps({
  details: Object
});

onMounted(() => {
  gsap.to('.chip', {
    opacity: 0.5,
    scale: 0.9,
    duration: 1,
    repeat: -1, 
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.1 
  })
})
</script>

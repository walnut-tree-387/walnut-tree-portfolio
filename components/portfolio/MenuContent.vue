<template>
    <div class="flex flex-col h-screen justify-between  pb-4">
        <div class="flex flex-col">
            <div @click="openSlide('Experience')" class="border-b border-t border-amber-800 flex items-center px-4 py-2 active:bg-amber-200 cursor-pointer group">
                <span class="text-lg text-gray-700 font-mono">Experience</span>
            </div>
            <div @click="openSlide('Certifications')" class="border-b border-amber-800 flex items-center px-4 py-2 active:bg-amber-200 cursor-pointer group">
                <span class="text-lg text-gray-700 font-mono">Certifications</span>
            </div>
            <div @click="openSlide('Projects')" class="border-b border-amber-800 flex items-center px-4 py-2 active:bg-amber-200 cursor-pointer group">
                <span class="text-lg text-gray-700 font-mono">Projects</span>
            </div>
            <div @click="openSlide('Publications')" class="border-b border-amber-800 flex items-center px-4 py-2 active:bg-amber-200 cursor-pointer group">
                <span class="text-lg text-gray-700 font-mono">Publications</span>
            </div>
        </div>
        <div class="pt-4 mb-20">
            <Footer :bg-color="'gray-700'"/>
        </div>
    </div>

</template>

<script setup lang="ts">
import { goToSlide } from "@/composables/usePortfolioSlide"
const emit = defineEmits<{
  (e: 'close'): void
}>()
const map: Record<string, number> = {
    Home: 0,
    Experience: 1,
    Certifications: 2,
    Projects: 3,
    Publications: 4
  }
const openSlide = (slideName : string) => {
    emit('close')
    goToSlide(map[slideName])
}
</script>

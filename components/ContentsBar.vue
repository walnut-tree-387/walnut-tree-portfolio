<template>
    <div class="flex flex-col justify-center items-center p-4  bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
        <div class="flex justify-center items-center p-4">
            <HomeTabs v-model:selected="currentTab"  />
        </div>
         <div class="h-px bg-gray-300 dark:bg-white w-full mb-4"></div>
        <div
            v-if="currentTab === 'images'"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-4"
        >
            <ImageCard
                v-for="(image, index) in images"
                :key="index"
                :src="image.src"
                :title="image.title"
            />
        </div>
        <div
            v-else
            class="flex justify-center items-center p-4 mb-4 w-full h-[400px] border rounded-lg bg-gray-100 dark:bg-gray-800"
        >
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Reels Gallery
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const currentTab = ref('images')
interface ImageData {
  src: string
  title: string
}
const images: ImageData[] = [
  {
    src: '/1.JPG',
    title: 'Mountain Adventure'
  },
  {
    src: '/2.JPG',
    title: 'Misty Forest'
  },
  {
    src: '/3.JPG',
    title: 'Ocean Waves'
  },
  {
    src: '/4.JPG',
    title: 'Cityscape at Night'
  },
  {
    src: '/5.JPG',
    title: 'Sunny Desert'
  },
  {
    src: '/6.JPG',
    title: 'Winter Mountains'
  },
{
    src: '/7.JPG',
    title: 'Ocean Waves'
  },
  {
    src: '/8.JPG',
    title: 'Cityscape at Night'
  },
  {
    src: '/9.JPG',
    title: 'Sunny Desert'
  },
  {
    src: '/10.JPG',
    title: 'Winter Mountains'
  }
]
</script>


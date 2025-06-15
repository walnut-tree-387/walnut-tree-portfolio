<template>
  <div class="flex flex-col justify-center items-center p-4 bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
    <!-- Tabs -->
    <div class="flex justify-center items-center p-4">
      <HomeTabs v-model:selected="currentTab" />
    </div>

    <!-- Divider -->
    <div class="h-px bg-gray-300 dark:bg-white w-full mb-4"></div>

    <!-- Images Grid -->
    <div
      v-if="currentTab === 'images'"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-4 w-full"
    >
      <ImageCard
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :title="image.title"
      />
    </div>

    <!-- Reels Grid -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-4 w-full"
    >
      <ReelsCard 
        v-for="(reel, index) in reels"
        :key="index"
        :src="reel.src"
      />
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
const reels = [
  { src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { src: 'https://www.w3schools.com/html/movie.mp4' },
  { src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { src: 'https://www.w3schools.com/html/movie.mp4' },
  { src: '/RainInJU.mp4' },
  { src: 'tajhall.mp4' },
  { src: '/RainInJU.mp4' },
  { src: 'tower.mp4' },
  { src: 'tajhall.mp4' },
  
]
</script>


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
    src: 'DSCF4449_yacnlv',
    title: 'Shahbag in a monsoon evening'
  },
  {
    src: 'DSCF4549_git5v2',
    title: 'Mistic Rain'
  },
  {
    src: 'DSCF4519_jx3yip',
    title: 'Monsoon Rain In a lake in JU'
  },
  {
    src: 'DSCF4581_c1k6lb',
    title: 'Two Friends in a Rainy Day'
  },
  {
    src: 'DSCF4566_vgjaox',
    title: 'Cycling in amidst Rain'
  },
  {
    src: '1000419068_lybsyy',
    title: 'Lonely Boy mourning in a Rainy Day'
  },
{
    src: 'DSCF4255_dtbte6',
    title: 'Girl cyclist in a sunny day'
  },
  {
    src: 'DSCF4328_b65gjr',
    title: 'Paddler from Dilkusha'
  },
  {
    src: 'DSCF4629_dtcaq9',
    title: 'Couple in a Rainy Day'
  },
  {
    src: '_DSF7420_h1eksk',
    title: 'Cloudy sky'
  }
]
const reels = [
  { src: 'https://res.cloudinary.com/dmtpylpbb/video/upload/w_720,c_scale/RainInJU_i2whkr' },
  { src: 'https://res.cloudinary.com/dmtpylpbb/video/upload/w_720,c_scale/mohabbat2_udgl7z' },
  { src: 'https://res.cloudinary.com/dmtpylpbb/video/upload/w_720,c_scale/badla_dine2_xzc65t' },
  { src: 'https://res.cloudinary.com/dmtpylpbb/video/upload/w_720,c_scale/output_ybwbnc' },
  
]
</script>


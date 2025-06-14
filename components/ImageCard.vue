<template>
  <div class="p-4 max-h-[200px] overflow-y-auto w-[200px]">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="n in 19" :key="n">
        <img
          class="h-auto max-w-full rounded-lg"
          :src="`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${n === 0 ? '' : n - 1}.jpg`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

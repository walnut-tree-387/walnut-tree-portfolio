<template>
  <div class="flex justify-around">
    <ul
      class="flex justify-center gap-4 -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
      role="tablist"
    >
      <li role="presentation">
        <Button
          :class="[
            'p-2 flex items-center gap-2 rounded-md transition',
            selected === 'images'
              ? 'bg-blue-100 text-black dark:text-white dark:bg-gray-700'
              : 'bg-white text-gray-800 hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
          ]"
          @click="$emit('update:selected', 'images')"
        >
          <Icon name="mdi:image-multiple" class="w-5 h-5" />
          Images
        </Button>
      </li>

      <li role="presentation">
        <Button
          :class="[
            'p-2 flex items-center gap-2 rounded-md transition',
            selected === 'reels'
              ? 'bg-blue-100 text-black dark:text-white dark:bg-gray-700'
              : 'bg-white text-gray-800 hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
          ]"
          @click="$emit('update:selected', 'reels')"
        >
          <Icon name="mdi:movie-open-play" class="w-5 h-5" />
          Reels
        </Button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  selected: {
    type: String,
    default: 'images',
  },
})
</script>

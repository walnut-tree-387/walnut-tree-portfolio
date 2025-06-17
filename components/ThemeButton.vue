<template>
    <Button
      @click="toggle"
      class="p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      aria-label="Toggle color mode"
    >
      <Icon
        :name="colorMode.preference === 'dark' ? 'mdi:weather-sunny' : 'mdi:weather-night'"
        class="w-2 h-3"
      />
    </Button>
</template>
<script setup>
const colorMode = useColorMode()
const toggle = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
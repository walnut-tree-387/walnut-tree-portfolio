<template>
  <div class="text-scale flex w-screen h-100vh items-center justify-center border-b border-dashed border-gray-800">
    <div class="p-2">
        <div class="flex flex-col items-center text-center p-2">
            <span class="text-lg font-bold">{{ details.companyName }}</span>
            <span class="text-md font-semibold">{{ details.period }}</span>
        </div>
        <div class="flex flex-wrap gap-2 text-center mt-2">
            <span
                v-for="skill in details.skills"
                :key="skill"
                class="text-sm text-gray-100 bg-gray-900 px-2 py-1 rounded-full"
                >
                {{ skill }}
            </span>
        </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  details: Object
});
</script>

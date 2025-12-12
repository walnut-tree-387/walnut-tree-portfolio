<template>
  <div class="text-scale flex w-screen h-100vh items-center justify-center">
    <div class="pl-4">
        <div class="flex flex-col items-center text-center pb-2">
            <span class="text-lg font-bold">{{ details.companyName }}</span>
            <span class="text-md font-semibold">{{ details.period }}</span>
        </div>
        <div class="flex flex-wrap gap-2 text-center mt-4">
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

<template>
  <div
    class="relative group rounded-lg shadow-sm
      transition hover:shadow-md hover:-translate-y-0.5 text-gray-800"
    >
    <a
      v-if="details?.link"
      :href="details.link"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute top-2 right-2 z-10
             text-blue-600 hover:text-blue-600 transition"
    >
      <Icon name="prime:external-link" class="w-3 h-3" />
    </a>
    <div class="flex h-36">
      <div class="w-2/4 p-4 rounded">
        <div
          class="w-full h-full bg-cover bg-center rounded-lg"
          :style="{ backgroundImage: `url(${imageUrl})` }"
        />
      </div>
      <div class="w-2/4 p-3 flex flex-col gap-2 justify-center">
        <h3
            class="text-xs font-bold leading-snug line-clamp-2"
          >
            {{ details?.title }}
          </h3>
        <div class="flex flex-wrap gap-1.5 mt-1">
          <span
            v-for="skill in details?.skills"
            :key="skill"
            class="text-[10px] px-2 py-0.5 rounded-full
                   bg-amber-400"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  details?: {
    title?: string
    image?: string
    skills?: string[]
    link?: string
  }
}>()

const imageUrl = computed(() => {
  if (!props.details?.image) return ''
  return props.details.image
})
</script>

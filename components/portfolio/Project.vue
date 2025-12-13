<template>
<div class="flex w-full items-stretch py-4">
  <div class="w-2/5 flex items-start font-bold text-lg pl-4">
    {{ details?.name }}
  </div>
  <div class="border-l-2 border-dashed border-gray-800 mx-4"></div>
  <div class="w-3/5 flex flex-col gap-2">
    <div class="flex gap-2 items-center">
      <Icon name="mdi:github" size="18" />
      <a
        v-if="details?.github"
        :href="details.github"
        class="flex items-center font-bold gap-2 text-blue-900 underline"
      >
        {{ details.githubAlt }}
      </a>
    </div>
    <div v-if="details?.link" class="flex gap-2 items-center">
      <Icon name="mdi:link-variant" size="18" />
      <a
        :href="details.link"
        class="flex items-center font-bold gap-2 text-blue-900 underline"
      >
        {{ details.linkAlt }}
      </a>
    </div>
  </div>
</div>

</template>



<script lang="ts" setup>
defineProps({
  details: Object
});
</script>
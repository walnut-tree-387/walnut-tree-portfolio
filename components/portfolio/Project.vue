<template>
<div class="flex flex-col w-full pl-8 py-4 text-md gap-2">
  <div class="flex items-start font-bold">
    {{ details?.name }}
  </div>
  <div class="flex flex-col font-primary text-blue-900">
    <div class="flex items-center gap-2">
      <Icon name="mdi:github" size="18" />
      <a
        v-if="details?.github"
        :href="details.github"
        class="flex items-center underline"
      >
        {{ details.githubAlt }}
      </a>
    </div>
    <div v-if="details?.link" class="flex gap-2 items-center">
      <Icon name="mdi:link-variant" size="18" />
      <a
        :href="details.link"
        class="flex items-center underline"
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
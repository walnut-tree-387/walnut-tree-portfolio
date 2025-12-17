<template>
   <div class="px-4  py-15 flex flex-col items-center justify-center">
    <span class="text-xl w-full text-center font-bold border-b border-dashed border-gray-800 pb-4"
    >
      Projects
    </span>
    <PortfolioProject
      v-for="project in projectList"
      :key="project.name"
      :details="project"
    />
   </div>
</template>
<script lang="ts" setup>
const projectList = ref([
    {
      name: 'Portfolio (3D)',
      github: 'https://github.com/walnut-tree-387/walnut-tree-portfolio',
      githubAlt: 'Repository',
      link: 'https://walnut-tree.netlify.app',
      linkAlt: 'Live'
    },
    {
      name: 'Huddle Messaging App)',
      github: 'https://github.com/walnut-tree-387/Huddles_Backend',
      githubAlt: 'Repository'
    },
    {
      name: 'Handwritten Digit Recognition With MNIST Datasets',
      github: 'https://github.com/walnut-tree-387/Digit-Recognition-with-MNIST-Datasets-from-Kaggle',
      githubAlt: 'Repository',
      link: 'https://digit-recognizer.streamlit.app',
      linkAlt: 'Live'
    }
])
</script>
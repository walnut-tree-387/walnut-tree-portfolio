<template>
   <div class="relative flex flex-col items-center justify-center top-15">
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
      githubAlt: 'Walnut Tree Portfolio Repository',
      link: 'https://walnut-tree.netlify.app',
      linkAlt: 'walnut-tree.netlify.app'
    },
    {
      name: 'Huddle Messaging App)',
      github: 'https://github.com/walnut-tree-387/Huddles_Backend',
      githubAlt: 'Huddles Backend Repository'
    },
    {
      name: 'Handwritten Digit Recognition With MNIST Datasets',
      github: 'https://github.com/walnut-tree-387/Digit-Recognition-with-MNIST-Datasets-from-Kaggle',
      githubAlt: 'Digit Recognition Repository',
      link: 'https://digit-recognizer.streamlit.app',
      linkAlt: 'Streamlit App'
    }
])
</script>
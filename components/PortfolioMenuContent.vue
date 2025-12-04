<template>
    <div class="flex flex-col h-screen justify-between  pb-4">
        <div class="flex flex-col">
            <div class="border-b border-t border-amber-800 flex items-center px-4 py-2 active:bg-amber-200 cursor-pointer group">
                <span class="text-lg text-gray-700 font-mono">Experience</span>
            </div>
            <div class="border-b border-amber-800 flex items-center px-4 py-2 active:bg-amber-200 cursor-pointer group">
                <span class="text-lg text-gray-700 font-mono">Projects</span>
            </div>

            <div class="border-b border-amber-800 flex items-center px-4 py-2 active:bg-amber-200 cursor-pointer group">
                <span class="text-lg text-gray-700 font-mono">Publications</span>
            </div>
            <div class="border-b border-amber-800 flex items-center px-4 py-2 active:bg-amber-200 cursor-pointer group">
                <span class="text-lg text-gray-700 font-mono">Certifications</span>
            </div>
        </div>
        <div class="pt-4 mb-20">
            <Footer :bg-color="'gray-700'"/>
        </div>
    </div>

</template>

<script setup lang="ts">
const bio = ref(`
A software engineer professional with a strong foundation in object-oriented
programming principles and am adept at utilizing languages like C++, Java,
C#, Python, and Javascript. Beyond my professional role, I am actively 
exploring research areas in the broader field of Software Analytics with 
particular interest in Mining Software Repositories, studying Software 
Architectures and sustainable software practices.
`)
</script>

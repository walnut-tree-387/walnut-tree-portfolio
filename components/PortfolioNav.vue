<template>
    <div class="flex justify-between w-screen m-4">
        <WalnutLogo class="z-30"/>
        <Icon ref="menuIcon" class="z-30 mr-10 mt-2" @click="toggleMenu" :name="iconName" :size="32"/>
        <div class="backdrop z-20 h-100vh fixed rounded-full bg-white" style="width: 200px; height: 200px; transform: scale(0);"></div>
    </div>
</template>
<script setup lang="ts">
const isOpen = ref(false)
const iconName = ref('arcticons:hamburger-menu')
const menuIcon = ref<HTMLElement | null>(null)
const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    if(isOpen.value){
        openSplashScreen()
        iconName.value = 'arcticons:fujifilm-xapp'
    }else{
        closeSplashScreen()
        iconName.value = 'arcticons:hamburger-menu'
    }
}
const gsap = useGSAP()
const openSplashScreen = () => {
    const iconEl = menuIcon.value?.$el ?? menuIcon.value
    const rect = iconEl.getBoundingClientRect()
    gsap.set('.backdrop', {
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
        xPercent: -50, 
        yPercent: -50
    })
    document.body.classList.add("overflow-hidden")
    const scaleSize = Math.max(window.innerWidth, window.innerHeight) / 100
    gsap.to('.backdrop', {
        scale: scaleSize + 1,
        duration: 0.6,
        ease: "power2.out",
    })
}
const closeSplashScreen = () => {
    document.body.classList.remove("overflow-hidden")
    gsap.to('.backdrop', {
        scale: 0,
        duration: 0.6,
        ease: "power2.in",
    })
}
</script>

<template>
    <div>
        <svg id="spring" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="90" height="90">
            <path id="springPath" fill="none" stroke="#6DB33F" stroke-width="5"
            d="M60 5 L110 32 L110 88 L60 115 L10 88 L10 32 Z" />
            <text x="50%" y="52%" font-size="14" font-family="mono"
                fill="#6DB33F" text-anchor="middle" dominant-baseline="middle" class="name" opacity="1"
            >
                Spring Boot
            </text>
        </svg>
    </div>
</template>
<script setup lang="ts">
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
const gsap = useGSAP()
gsap.registerPlugin(DrawSVGPlugin)
onMounted(() => {
    gsap.from("#springPath", {
        duration:2, repeat: -1, yoyo: true, 
        stagger: 0.1, drawSVG: 0, scale: 1.2
    });
    // gsap.set('#spring', {
    //     opacity: 0
    // });
    // let mm = gsap.matchMedia()
    // mm.add({
    //   isDesktop : "(min-width : 501px)",
    //   isMobile : "(max-width : 500px)"
    // }, (context => {
    //     let {isDesktop, isMobile} = context.conditions as {
    //         isDesktop: boolean,
    //         isMobile: boolean
    //     }
    //     let animation = {
    //         duration: 3,
    //         opacity: 1,
    //         ease: "power2.inOut",
    //         scale: 1,
    //         x: 0,
    //         rotation: 0
    //     }
    //     if(isDesktop){
    //         animation.scale = 0.8,
    //         animation.x = 0
    //     }else if(isMobile){
    //         animation.scale = 0.9,
    //         animation.x = 0
    //         animation.rotation = 360
    //     }
    //     gsap.to('#spring', animation)
    //     return () => {

    //     }
    // }))

})
</script>
<style scoped>
#spring{
    font-weight:600
}
</style>
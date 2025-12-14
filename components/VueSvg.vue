<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="90" height="100" role="img" aria-labelledby="vueTitle">
            <title id="vueTitle">Vue.js logo (stylized)</title>
            <polygon id="poly1" points="60,18 98,90 74,90 60,58 46,90 22,90"
                    fill="none" stroke="#41b883" stroke-width="3"/>
            <polygon id="poly2" points="60,28 86,90 74,90 60,62 46,90 34,90"
                    fill="#41b883"/>
            <polygon id="poly3" points="60,40 72,70 60,40 48,70" fill="none" stroke="#35495e" stroke-width="2" opacity="1"/>
             <text x="80%" y="99%" font-size="16" font-family="primary" font-weight="bold"
                fill="gray-700" text-anchor="middle" dominant-baseline="middle" class="name" opacity="1"
            >
                Vue Js
            </text>
        </svg>
    </div>
</template>
<script setup lang="ts">
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { SplitText } from "gsap/SplitText"
const gsap = useGSAP()
gsap.registerPlugin(DrawSVGPlugin, SplitText)
onMounted(() => {
    gsap.from("#poly1", {duration:2, repeat: -1, yoyo: true, stagger: 0.5, scale: 1.5, drawSVG: 0});
    gsap.from("#poly3", {duration:2, repeat: -1, yoyo: true, stagger: 0.5, drawSVG: 0});
})
</script>

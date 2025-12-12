<template>
  <div class="relative h-screen w-100vw overflow-hidden">
    <div class="absolute inset-0 bg-amber-200 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
    <div class="absolute inset-0 bg-amber-700 [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>
    <CarSvg id="car" class="absolute z-30 bottom-0 left-0 w-12 h-12 rotate-[-30deg]"/>
    <PortfolioExperienceList/>
  </div>
</template>
<script setup lang="ts">
import { ScrollTrigger } from 'gsap/all';
const gsap = useGSAP()
onMounted(() => {
  const car = document.getElementById("car")!;
  const container = car.parentElement!;

  const createAnimation = () => {
    ScrollTrigger.getAll().forEach(st => st.kill());
    gsap.killTweensOf(car);

    const w = container.offsetWidth;
    const h = container.offsetHeight;
    const slopeAngle = Math.atan(h / w) * (180 / Math.PI);
    gsap.set(car, { rotate: -slopeAngle, transformOrigin: "bottom left" });
    gsap.to(car, {
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "top end",
        scrub: true,
      },
      x: w,  
      y: -h, 
      ease: "none",
      duration: 3
    });
  };

  createAnimation();
  window.addEventListener("resize", createAnimation);
});
</script>
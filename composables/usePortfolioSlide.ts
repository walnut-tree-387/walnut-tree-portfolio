import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

export const goToSlide = (index: number) => {
const st = ScrollTrigger.getById("portfolio-slides")
  if (!st) return

  const totalSlides = 3
  const targetProgress = index / (totalSlides - 1)

  const scrollTarget = st.start + (st.end - st.start) * targetProgress
  const prevSnap = st.vars.snap
  st.vars.snap = 0

  gsap.to(window, {
    duration: 0.8,
    scrollTo: scrollTarget,
    ease: "power2.inOut",
    onComplete: () => {
      st.vars.snap = prevSnap
      st.refresh() 
    }
  })

}

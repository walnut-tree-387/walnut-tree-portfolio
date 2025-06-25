import * as Three from 'three'
import { OrbitControlsService } from './services/OrbitControllService'
import { SkyDomeService } from './services/SkyDomeService'
import { ResizeService } from './utils/LocalResizer'
export function useEarthTextureSphere(container : HTMLElement, scene : Three.Scene, renderer : Three.WebGLRenderer){
  const camera = new Three.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 180)
  camera.lookAt(0, 0, 0)
  const controls = new OrbitControlsService(camera, container)
  const skyDomeService = new SkyDomeService('/2k_stars_milky_way.jpg', 50)
  skyDomeService.addToScene(scene)
  let animationId = 0
  const resizeService = new ResizeService(camera, renderer, container)

  function animate() {
    animationId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
  return {
    cleanup: () => {
      cancelAnimationFrame(animationId)
      renderer.dispose()
      controls.dispose?.()
      resizeService.dispose()
    }
  }
} 
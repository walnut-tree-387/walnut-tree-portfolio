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
  const secondDomeService = new SkyDomeService('/2k_stars_milky_way.jpg', 15)
  const thirdDomeService = new SkyDomeService('/900px.jpg', 15)
  secondDomeService.setPosition(40, 0, 0)
  secondDomeService.addToScene(scene)
  thirdDomeService.setPosition(-40, 0, 0)
  thirdDomeService.addToScene(scene)
  let animationId = 0
  const resizeService = new ResizeService(camera, renderer, container)

  function animate() {
    animationId = requestAnimationFrame(animate)
    moveCameraInCircle()
    controls.update()
    renderer.render(scene, camera)
  }
  let angle = 0
  function moveCameraInCircle() {
    angle += 0.01
    camera.position.x = Math.cos(angle) * 180
    camera.position.z = Math.sin(angle) * 180
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
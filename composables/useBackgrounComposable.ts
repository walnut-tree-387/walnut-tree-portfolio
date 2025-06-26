import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class BackgroundAnimation {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private controls: OrbitControls

  constructor(private container: HTMLElement) {
    this.scene = new THREE.Scene()

    const width = container.clientWidth
    const height = container.clientHeight

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    this.camera.position.z = 2

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(width, height)
    container.appendChild(this.renderer.domElement)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.enablePan = false
    this.controls.enableZoom = false
    this.controls.dampingFactor = 0.05
    this.controls.rotateSpeed = 0.5


    console.log('BackgroundAnimation initialized')
    const circles = this.getBackgroundCircles()
    this.scene.add(circles)

    this.animate()
  }

  private animate = () => {
    requestAnimationFrame(this.animate)
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  private getBackgroundCircles = (): THREE.Group => {
    const group = new THREE.Group()
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.TorusGeometry( 0.2, 2, 80, 20 ); 
      const mesh = new THREE.Mesh(geometry, material)

      mesh.position.set(
        (Math.random() - 0.5) * 1,
        (Math.random() - 0.5) * 1,
        (Math.random() - 0.5) * 1
      )
      mesh.rotation.z = Math.random() * Math.PI
      group.add(mesh)
    }

    group.position.set(0, 0, -5)
    group.scale.set(0.5, 0.5, 0.5)

    return group
  }
}

export const useBackgroundAnimation = () => {
  const init = (container: HTMLElement) => {
    return new BackgroundAnimation(container)
  }
  return { init }
}

import * as THREE from 'three'

export class ResizeService {
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private container: HTMLElement

  private onResizeBound: () => void

  constructor(
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    container: HTMLElement
  ) {
    this.camera = camera
    this.renderer = renderer
    this.container = container

    this.onResizeBound = this.onResize.bind(this)
    window.addEventListener('resize', this.onResizeBound)
    this.onResize()
  }

  private onResize(): void {
    if (!this.container) return
    console.log('🔄 Resizing renderer and camera')
    const width = this.container.clientWidth
    const height = this.container.clientHeight

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  public dispose(): void {
    window.removeEventListener('resize', this.onResizeBound)
  }
}

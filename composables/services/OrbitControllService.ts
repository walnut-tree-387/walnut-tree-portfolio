import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class OrbitControlsService {
  private controls: OrbitControls

  constructor(camera: THREE.Camera, domElement: HTMLElement) {
    this.controls = new OrbitControls(camera, domElement)
    this.initDefaults()
  }

  private initDefaults() {
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    this.controls.enablePan = false
    this.controls.enableZoom = false
    this.controls.rotateSpeed = 0.5
  }

  public getControls(): OrbitControls {
    return this.controls
  }

  public update(): void {
    this.controls.update()
  }

  public setZoomEnabled(enabled: boolean): void {
    this.controls.enableZoom = enabled
  }

  public dispose(): void {
    this.controls.dispose()
  }
}

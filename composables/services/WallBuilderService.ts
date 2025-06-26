import * as THREE from 'three'
import { Wall } from '../entities/Wall'

export class WallBuilderService {
  private container: HTMLElement
  private scene: THREE.Scene
  private unitScale: number

  constructor(container: HTMLElement, scene: THREE.Scene, unitScale = 100) {
    this.container = container
    this.scene = scene
    this.unitScale = unitScale
  }

  private getSizeInUnits(): { width: number; height: number } {
    const { clientWidth, clientHeight } = this.container
    return {
      width: clientWidth / this.unitScale,
      height: clientHeight / this.unitScale,
    }
  }

  addRoomWalls(options?: { height?: number; color?: number }) {
    const { width, height: viewportHeight } = this.getSizeInUnits()
    const wallHeight = options?.height ?? 5
    const color = options?.color ?? 0x444444

    const halfWidth = width / 2
    const halfHeight = viewportHeight / 2
    const wallY = 0 // floor-centered

    const materialOptions = {
      width,
      height: wallHeight,
      color,
    }

    // BACK WALL
    new Wall({
      ...materialOptions,
      position: new THREE.Vector3(0, wallY, -halfWidth),
    }).addToScene(this.scene)

    // FRONT WALL
    new Wall({
      ...materialOptions,
      position: new THREE.Vector3(0, wallY, halfWidth),
      rotation: new THREE.Euler(0, Math.PI, 0),
    }).addToScene(this.scene)

    // LEFT WALL
    new Wall({
      ...materialOptions,
      position: new THREE.Vector3(-halfWidth, wallY, 0),
      rotation: new THREE.Euler(0, Math.PI / 2, 0),
    }).addToScene(this.scene)

    // RIGHT WALL
    new Wall({
      ...materialOptions,
      position: new THREE.Vector3(halfWidth, wallY, 0),
      rotation: new THREE.Euler(0, -Math.PI / 2, 0),
    }).addToScene(this.scene)
  }
}

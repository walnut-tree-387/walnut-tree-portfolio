import * as THREE from 'three'

export interface WallOptions {
  width: number
  height: number
  depth?: number
  color?: number
  position?: THREE.Vector3
  rotation?: THREE.Euler
  transparent?: boolean
  opacity?: number
  textureUrl?: string
}

export class Wall {
  public mesh: THREE.Mesh

  constructor(options: WallOptions) {
    const {
      width,
      height,
      depth = 0.1,
      color = 0x444444,
      position = new THREE.Vector3(0, 0, 0),
      rotation = new THREE.Euler(0, 0, 0),
      transparent = false,
      opacity = 1,
      textureUrl,
    } = options

    const geometry = new THREE.PlaneGeometry(width, height)

    let material: THREE.Material

    if (textureUrl) {
      const texture = new THREE.TextureLoader().load(textureUrl)
      material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent,
        opacity,
      })
    } else {
      material = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent,
        opacity,
      })
    }

    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.position.copy(position)
    this.mesh.rotation.copy(rotation)
  }

  addToScene(scene: THREE.Scene) {
    scene.add(this.mesh)
  }
}

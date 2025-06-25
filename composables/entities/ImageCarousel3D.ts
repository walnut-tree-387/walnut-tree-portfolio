import * as THREE from 'three'

export class ImageCarousel3D {
  private scene: THREE.Scene
  private carouselGroup: THREE.Group
  private radius: number
  private imageUrls: string[]
  private imageSize: { width: number; height: number }

  constructor(
    scene: THREE.Scene,
    imageUrls: string[],
    radius: number = 6,
    imageSize = { width: 2, height: 3 }
  ) {
    this.scene = scene
    this.carouselGroup = new THREE.Group()
    this.radius = radius
    this.imageUrls = imageUrls
    this.imageSize = imageSize

    this.createCarousel()
    this.scene.add(this.carouselGroup)
  }

  private createImageMesh(url: string): THREE.Mesh {
    const geometry = new THREE.PlaneGeometry(this.imageSize.width, this.imageSize.height)
    const texture = new THREE.TextureLoader().load(url)
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide })
    return new THREE.Mesh(geometry, material)
  }

  private createCarousel() {
    const angleStep = (2 * Math.PI) / this.imageUrls.length

    this.imageUrls.forEach((url, index) => {
      const angle = index * angleStep
      const mesh = this.createImageMesh(url)
      mesh.position.set(
        Math.cos(angle) * this.radius,
        0,
        Math.sin(angle) * this.radius
      )
      mesh.lookAt(0, 0, 0)
      this.carouselGroup.add(mesh)
    })
  }

  public rotate(speed: number = 0.01) {
    this.carouselGroup.rotation.y += speed
  }

  public get group() {
    return this.carouselGroup
  }
}

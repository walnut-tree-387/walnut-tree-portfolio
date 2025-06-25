import * as THREE from 'three'

export class StarsService {
  private stars!: THREE.Points

  constructor(private scene: THREE.Scene) {}

  public addStars(count = 500, spread = 200, size = 0.5, color = 0xffffff): void {
    const geometry = new THREE.BufferGeometry()
    const positions: number[] = []

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread
      const y = (Math.random() - 0.5) * spread
      const z = (Math.random() - 0.5) * spread
      positions.push(x, y, z)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({ color, size })
    this.stars = new THREE.Points(geometry, material)
    this.scene.add(this.stars)
  }

  public removeStars(): void {
    if (this.stars) {
      this.scene.remove(this.stars)
      this.stars.geometry.dispose()
      if (Array.isArray(this.stars.material)) {
        this.stars.material.forEach((m) => m.dispose())
      } else {
        this.stars.material.dispose()
      }
    }
  }
}

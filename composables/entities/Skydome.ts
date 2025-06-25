import * as THREE from 'three'

export class Skydome {
  private spaceTexture: THREE.Texture
  private skyGeo: THREE.SphereGeometry
  private skyMat: THREE.MeshBasicMaterial
  private skyDome: THREE.Mesh

  constructor(initialTextureUrl: string, radius: number = 100) {
  const textureLoader = new THREE.TextureLoader()
  this.spaceTexture = textureLoader.load(initialTextureUrl)
  this.skyGeo = new THREE.SphereGeometry(radius, 64, 64)
  this.skyMat = new THREE.MeshBasicMaterial({
    map: this.spaceTexture,
    side: THREE.BackSide,
  })
  this.skyDome = new THREE.Mesh(this.skyGeo, this.skyMat)
}
  public getMesh(): THREE.Mesh {
    return this.skyDome
  }

  public setTexture(url: string): void {
    const loader = new THREE.TextureLoader()
    loader.load(url, (newTexture) => {
      this.spaceTexture = newTexture
      this.skyMat.map = newTexture
      this.skyMat.needsUpdate = true
    })
  }
}

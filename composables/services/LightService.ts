import * as THREE from 'three'

export class LightService {
  private ambientLight?: THREE.AmbientLight
  private directionalLight?: THREE.DirectionalLight
  private pointLight?: THREE.PointLight
  private spotLight?: THREE.SpotLight

  constructor() {}

  public getAmbientLightSource(color = 0xffffff, intensity = 0.4): THREE.AmbientLight {
    if (!this.ambientLight) {
      this.ambientLight = new THREE.AmbientLight(color, intensity)
    }
    return this.ambientLight
  }

  public getDirectionalLightSource(
    color = 0xffffff,
    intensity = 0.8,
    position: THREE.Vector3 = new THREE.Vector3(10, 10, 10)
  ): THREE.DirectionalLight {
    if (!this.directionalLight) {
      this.directionalLight = new THREE.DirectionalLight(color, intensity)
      this.directionalLight.position.copy(position)
    }
    return this.directionalLight
  }

  public getPointLightSource(
    color = 0xffffff,
    intensity = 0.6,
    distance = 100,
    position: THREE.Vector3 = new THREE.Vector3(0, 10, 20)
  ): THREE.PointLight {
    if (!this.pointLight) {
      this.pointLight = new THREE.PointLight(color, intensity, distance)
      this.pointLight.position.copy(position)
    }
    return this.pointLight
  }

  public getSpotLightSource(
    color = 0xffffff,
    intensity = 0.5,
    position: THREE.Vector3 = new THREE.Vector3(15, 40, 35),
    castShadow = true
  ): THREE.SpotLight {
    if (!this.spotLight) {
      this.spotLight = new THREE.SpotLight(color, intensity)
      this.spotLight.position.copy(position)
      this.spotLight.castShadow = castShadow
    }
    return this.spotLight
  }
}

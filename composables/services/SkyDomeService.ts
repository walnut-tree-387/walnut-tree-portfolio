import * as THREE from 'three'
import { Skydome } from '../entities/Skydome'

export class SkyDomeService {
  private skydome: Skydome

  constructor(initialTextureUrl: string, radius: number) {
    this.skydome = new Skydome(initialTextureUrl, radius)
  }

  public addToScene(scene: THREE.Scene): THREE.Scene {
    scene.add(this.skydome.getMesh())
    return scene
  }

  public removeFromScene(scene: THREE.Scene): THREE.Scene {
    scene.remove(this.skydome.getMesh())
    return scene
  }
  public setPosition(x: number, y: number, z: number): void {
    this.skydome.getMesh().position.set(x, y, z)
  }

  public getSkydome(): Skydome {
    return this.skydome
  }
}

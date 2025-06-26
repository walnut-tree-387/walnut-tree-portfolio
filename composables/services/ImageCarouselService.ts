import * as THREE from 'three'
import { ImageCarousel3D } from '../entities/ImageCarousel3D'

export class ImageCarouselService {
  private carousel: ImageCarousel3D

  constructor(
    scene: THREE.Scene,
    imageIds: string[],
    cloudName: string,
    radius: number = 6,
    imageSize = { width: 2, height: 3 }
  ) {
    const urls = imageIds.map(
      id => `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${id}.jpg`
    )

    this.carousel = new ImageCarousel3D(scene, urls, radius, imageSize)
  }

  public getCarousel(): ImageCarousel3D {
    return this.carousel
  }

  public rotate(speed: number = 0.01): void {
    this.carousel.rotate(speed)
  }
}

// ✅ Default function to quickly create the service with default values
export default function createImageCarouselService(scene: THREE.Scene): ImageCarouselService {
  const defaultImageIds = [
    '1000419068_lybsyy',
    'DSCF4449_yacnlv',
    'DSCF4549_git5v2',
    'DSCF4519_jx3yip',
    'DSCF4581_c1k6lb',
    'DSCF4566_vgjaox',
  ]

  const cloudName = 'dmtpylpbb'
  return new ImageCarouselService(scene, defaultImageIds, cloudName)
}

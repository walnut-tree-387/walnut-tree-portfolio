import * as THREE from 'three'

export class ThreeScene {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private leftDoor: THREE.Mesh
  private rightDoor: THREE.Mesh

  constructor(private container: HTMLElement) {
    this.scene = new THREE.Scene()

    const width = container.clientWidth
    const height = container.clientHeight

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    this.camera.position.z = 10

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(width, height)
    container.appendChild(this.renderer.domElement)

    const material = new THREE.MeshBasicMaterial({ color: 0x324151 })

    // Half width box geometry
    const halfWidth = 1
    const fullHeight = 2
    const fullDepth = 2

    const leftGeometry = new THREE.BoxGeometry(halfWidth, fullHeight, fullDepth)
    const rightGeometry = new THREE.BoxGeometry(halfWidth, fullHeight, fullDepth)

    this.leftDoor = new THREE.Mesh(leftGeometry, material)
    this.rightDoor = new THREE.Mesh(rightGeometry, material)

    this.leftDoor.position.x = -halfWidth / 2
    this.rightDoor.position.x = halfWidth / 2

    this.scene.add(this.leftDoor)
    this.scene.add(this.rightDoor)

    // Optional: edges
    const leftEdges = new THREE.EdgesGeometry(leftGeometry)
    const rightEdges = new THREE.EdgesGeometry(rightGeometry)

    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff })

    const leftLines = new THREE.LineSegments(leftEdges, edgeMaterial)
    const rightLines = new THREE.LineSegments(rightEdges, edgeMaterial)

    leftLines.position.copy(this.leftDoor.position)
    rightLines.position.copy(this.rightDoor.position)

    this.scene.add(leftLines)
    this.scene.add(rightLines)

    this.animate()
  }

  public openDoorsAndEnter = () => {
    const steps = 60
    let step = 0

    const animate = () => {
      if (step < steps) {
        this.leftDoor.position.x -= 0.01
        this.rightDoor.position.x += 0.01
        this.camera.position.z -= 0.05
        step++
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  private animate = () => {
    requestAnimationFrame(this.animate)
    this.renderer.render(this.scene, this.camera)
  }
}

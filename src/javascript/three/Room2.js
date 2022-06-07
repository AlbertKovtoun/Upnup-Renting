import * as THREE from "three"
import { environment, loaders, scene } from "./Experience"

export class Room2 {
  constructor() {
    this.setRoom()
  }

  setRoom() {
    loaders.gltfLoader.load("/assets/models/Room2.gltf", (gltf) => {
      this.room = gltf.scene

      this.room.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = environment.envMap
          child.material.envMapIntensity = 2
        }
      })

      scene.add(this.room)
    })
  }
}

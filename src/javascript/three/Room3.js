import { loaders, scene } from "./Experience"

export class Room3 {
  constructor() {
    this.setRoom()
  }

  setRoom() {
    loaders.gltfLoader.load("/assets/models/Room3.gltf", (gltf) => {
      this.room = gltf.scene

      this.navMesh = this.room.getObjectByName("NavMesh")

      scene.add(this.room)
    })
  }
}

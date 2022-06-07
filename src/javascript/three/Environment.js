import * as THREE from "three"
import { loaders } from "./Experience"

export class Environment {
  constructor() {
    this.setEnvironment()
  }

  setEnvironment() {
    this.envMap = loaders.cubeTextureLoader.load([
      "/assets/1/px.png",
      "/assets/1/nx.png",
      "/assets/1/py.png",
      "/assets/1/ny.png",
      "/assets/1/pz.png",
      "/assets/1/nz.png",
    ])
    this.envMap.encoding = THREE.sRGBEncoding
  }
}

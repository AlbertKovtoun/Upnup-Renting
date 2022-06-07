import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {
  deviceStateManager,
  finiteStateMachine,
  mobileControls,
  player,
} from "./Experience"

export class Loaders {
  constructor() {
    this.setLoaders()
  }

  setLoaders() {
    this.loadingManager = new THREE.LoadingManager(() => {
      //Put everything here what you want to load asynsc
      player.setPlayer()
      finiteStateMachine.setFiniteStateMachine(player.characterParent)
    })

    //Textures
    this.textureLoader = new THREE.TextureLoader(this.loadingManager)

    //Models
    this.gltfLoader = new GLTFLoader(this.loadingManager)

    //Env Maps
    this.cubeTextureLoader = new THREE.CubeTextureLoader(this.loadingManager)
  }
}

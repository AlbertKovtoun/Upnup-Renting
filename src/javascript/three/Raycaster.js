import * as THREE from "three"
import {
  camera,
  deviceStateManager,
  environment,
  player,
  scene,
} from "./Experience"

export class Raycaster {
  constructor() {
    // this.currentIntersect = null
    this.firstPersonOptions = {
      raycaster: new THREE.Raycaster(),
      currentIntersect: null,
    }

    this.leftControllerOptions = {
      raycaster: new THREE.Raycaster(),
      tempMatrix: new THREE.Matrix4(),
      currentIntersect: null,
    }

    this.rightControllerOptions = {
      raycaster: new THREE.Raycaster(),
      tempMatrix: new THREE.Matrix4(),
      currentIntersect: null,
    }
    this.raycaster = new THREE.Raycaster()
    this.tempMatrix = new THREE.Matrix4()
    this.currentIntersect = null

    this.setObjectsToTest()
  }

  setObjectsToTest() {
    this.group = new THREE.Group()
    scene.add(this.group)

    // this.object = new THREE.Mesh(
    //   new THREE.SphereGeometry(1, 20, 20),
    //   new THREE.MeshStandardMaterial({
    //     color: "white",
    //     roughness: 0,
    //     envMap: environment.envMap,
    //     metalness: 1,
    //   })
    // )
    // this.object.name = "OBJECT"
    // this.object.position.set(0, 1, -5)

    // if (deviceStateManager.state === "mobile") {
    //   this.object.material.color = new THREE.Color(0xff0000)
    // }

    // this.group.add(this.object)
  }

  getFirstPersonIntersections() {
    //Cast a ray from the center of the canvas
    this.firstPersonOptions.raycaster.setFromCamera(
      new THREE.Vector2(0, 0),
      camera.camera
    )

    const intersects = this.firstPersonOptions.raycaster.intersectObjects(
      this.group.children
    )

    if (intersects.length) {
      if (!this.firstPersonOptions.currentIntersect) {
        console.log("mouse enter")
      }

      this.firstPersonOptions.currentIntersect = intersects[0]
    } else {
      if (this.firstPersonOptions.currentIntersect) {
        console.log("mouse leave")
      }

      this.firstPersonOptions.currentIntersect = null
    }
  }

  getLeftControllerIntersections(controller1) {
    this.leftControllerOptions.tempMatrix
      .identity()
      .extractRotation(controller1.matrixWorld)
    this.leftControllerOptions.raycaster.ray.origin.setFromMatrixPosition(
      controller1.matrixWorld
    )
    this.leftControllerOptions.raycaster.ray.direction
      .set(0, 0, -1)
      .applyMatrix4(this.leftControllerOptions.tempMatrix)
    const intersects = this.leftControllerOptions.raycaster.intersectObjects(
      this.group.children,
      false
    )

    if (intersects.length) {
      if (!this.leftControllerOptions.currentIntersect) {
        console.log("LEFT Raycaster Entered object")
      }
      this.leftControllerOptions.currentIntersect = intersects[0]
    } else {
      if (this.leftControllerOptions.currentIntersect) {
        console.log("LEFT Raycaster Left object")
      }
      this.leftControllerOptions.currentIntersect = null
    }
  }

  getRightControllerIntersections(controller2) {
    this.rightControllerOptions.tempMatrix
      .identity()
      .extractRotation(controller2.matrixWorld)
    this.rightControllerOptions.raycaster.ray.origin.setFromMatrixPosition(
      controller2.matrixWorld
    )
    this.rightControllerOptions.raycaster.ray.direction
      .set(0, 0, -1)
      .applyMatrix4(this.rightControllerOptions.tempMatrix)
    const intersects = this.rightControllerOptions.raycaster.intersectObjects(
      this.group.children,
      false
    )

    if (intersects.length) {
      if (!this.rightControllerOptions.currentIntersect) {
        console.log("RIGHT Raycaster Entered object")
      }
      this.rightControllerOptions.currentIntersect = intersects[0]
    } else {
      if (this.rightControllerOptions.currentIntersect) {
        console.log("RIGHT Raycaster Left object")
      }
      this.rightControllerOptions.currentIntersect = null
    }
  }
}

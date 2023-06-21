import { Actor, Vector, Input, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";

export class Taxi extends Actor {
  
  spawnPosX
  spawnPosY
  
  constructor(spawnPosX, spawnPosY) {
    super();
    this.pos = new Vector(spawnPosX, spawnPosY);
    this.graphics.use(Resources.Taxi.toSprite());
    this.useGraphicBounds = true;
  }
  onInitialize() {
    this.body.collisionType = CollisionType.Active;
  }

  onPreUpdate(engine) {
    let speed = 0;

    // UP = forward
    if (
      engine.input.keyboard.isHeld(Input.Keys.Up) ||
      engine.input.keyboard.isHeld(Input.Keys.Up)
    ) {
      speed = -150;
    }

    // cursor keys is direction
    if (
      engine.input.keyboard.isHeld(Input.Keys.D) ||
      engine.input.keyboard.isHeld(Input.Keys.Right)
    ) {
      this.rotation += 0.05;
    }
    if (
      engine.input.keyboard.isHeld(Input.Keys.A) ||
      engine.input.keyboard.isHeld(Input.Keys.Left)
    ) {
      this.rotation -= 0.05;
    }

    // direction is the cosine/sine of the angle!
    let direction = new Vector(
      Math.cos(this.rotation) * speed,
      Math.sin(this.rotation) * speed
    );

    this.vel = direction;
  }
}
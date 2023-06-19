import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "/js/resources.js";

export class Taxi extends Actor {
  constructor() {
    super();
  }
  onInitialize(engine) {
    this.graphics.use(Resources.Taxi.toSprite());
    this.pos = new Vector(400, 400);
    this.vel = new Vector(0, 0);
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

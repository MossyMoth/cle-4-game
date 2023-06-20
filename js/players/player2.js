import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "/js/resources.js";

export class Waterbus extends Actor {
  constructor() {
    super();
  }
  onInitialize(engine) {
    this.graphics.use(Resources.Waterbus.toSprite());
    this.pos = new Vector(200, 400);
    this.rotation = (270 * Math.PI) / 180;
  }

  onPreUpdate(engine) {
    let speed = 60;

    // cursor keys is direction
    if (engine.input.keyboard.isHeld(Input.Keys.D)) {
      if (this.rotation <= (320 * Math.PI) / 180) {
        this.rotation += 0.02;
      }
    }
    if (engine.input.keyboard.isHeld(Input.Keys.A)) {
      if (this.rotation >= (220 * Math.PI) / 180) {
        this.rotation -= 0.02;
      }
    }

    // direction is the cosine/sine of the angle!
    let direction = new Vector(
      Math.cos(this.rotation) * speed,
      Math.sin(this.rotation) * speed
    );

    this.vel = direction;
  }
}

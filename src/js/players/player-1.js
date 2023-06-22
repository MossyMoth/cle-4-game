import * as ex from "excalibur";
import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "/src/js/resources.js";

export class Taxi extends Actor {
  spawnPosX
  spawnPosY
  
  constructor(spawnPosX, spawnPosY) {
    super();
    this._name = "taxi";
    this.pos = new Vector(spawnPosX, spawnPosY);
    this.graphics.use(Resources.Taxi.toSprite());
    this.collider.useBoxCollider(10, 21, Vector.Half, new Vector(0, 0)); 
    this.useGraphicBounds = true;
  }

  onInitialize(engine) {
    this.rotation = (270 * Math.PI) / 180;
    this.body.collisionType = ex.CollisionType.Active;
  }

  onPreUpdate(engine) {
    let speed = 60;

    // cursor keys is direction
    if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      if (this.rotation <= (320 * Math.PI) / 180) {
        this.rotation += 0.02;
      }
    }
    if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
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

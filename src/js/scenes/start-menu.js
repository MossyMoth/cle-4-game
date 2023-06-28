import * as ex from "excalibur";
import { Game } from "../game";
import { ResourceLoader, Resources } from "../resources.js";
import { TutorialLevel } from "./level-0.js";

export class StartMenu extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine) {

    const Background = new ex.Actor({
      x: 0,
      y: 0,
    });
    Background.graphics.use(Resources.Background.toSprite());
    Background.scale = new ex.Vector(4.5, 4.5);
    this.add(Background);

    // const Logo = new ex.Actor({
    //   x: 0,
    //   y: -40,
    // });
    // Logo.graphics.use(Resources.Logo.toSprite());
    // Logo.scale = new ex.Vector(4.0, 4.0);
    // this.add(Logo);

    // const Start = new ex.Actor({
    //     x: 0,
    //     y: 80,
    //   });
    //   Start.graphics.use(Resources.Start.toSprite());
    //   Start.scale = new ex.Vector(4.0, 4.0);
    //   this.add(Start);

    let camera = engine.currentScene.camera;
    camera.strategy.lockToActor(Background);
    this.camera.zoom = 1.5;
  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(ex.Input.Keys.Space)) {
      console.log("input");

      const Level0 = new TutorialLevel();
      engine.addScene("tutorialLevel", Level0);
      engine.goToScene("tutorialLevel");
    }
  }
}

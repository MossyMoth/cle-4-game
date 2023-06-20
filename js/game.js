import { Actor, Engine, Vector, Color } from "excalibur";
import { Resources, ResourceLoader } from "/js/resources.js";
import { Taxi } from "./players/player1";
import { Waterbus } from "./players/player2.js";

export class Game extends Engine {
  constructor() {
    super();
    this.start(ResourceLoader).then(() => this.startGame());
    const devtool = new DevTool(game);
  }

  startGame() {
    const taxi = new Taxi();
    this.add(taxi);

    const waterbus = new Waterbus();
    this.add(waterbus);

    console.log();
  }
}

new Game();

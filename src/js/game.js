import { Actor, Engine, Vector, Color } from "excalibur";
import { Resources, ResourceLoader } from "/src/js/resources.js";
import { Taxi } from "./players/player-1";
import { Waterbus } from "./players/player-2";

export class Game extends Engine {
  constructor() {
    super();
    this.start(ResourceLoader).then(() => this.startGame());
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

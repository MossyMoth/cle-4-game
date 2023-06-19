import { Actor, Engine, Vector, Color } from "excalibur";
import { Resources, ResourceLoader } from "/js/resources.js";
import { Taxi } from "./players/player1";

export class Game extends Engine {
  constructor() {
    super();
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    const taxi = new Taxi();
    this.add(taxi);
    console.log();
  }
}

new Game();

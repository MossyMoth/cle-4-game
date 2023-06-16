import { Actor, Engine, Vector, Color } from "excalibur";
import { Resources, ResourceLoader } from "../js/resources.js";
import { Taxi } from "../js/players/player1";

export class Game extends Engine {
    constructor() {
      super();
      this.start(ResourceLoader).then(() => this.startGame());
    }
  
    startGame() {
      const taxi = new taxi();
      this.add(Taxi);
    }
  }
  
  new Game();
  
import { Actor, Engine, Vector, Color } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Fish } from "./fish.js";

export class Game extends Engine {
    constructor() {
        super();
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        for (let i = 0; i < 15; i++) {
            const fish = new Fish();
            this.add(fish);
        }
    }
}

new Game();

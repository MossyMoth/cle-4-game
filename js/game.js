import { Actor, Engine, Vector, Color } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { StartMenu } from "./scenes/start-menu.js";
import { TutorialLevel } from "./scenes/level-0.js";

export class Game extends Engine {
    constructor() {
        super();
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        const startMenu = new StartMenu();
        this.addScene('startMenu', startMenu);
        this.goToScene('startMenu');
        const Level0 = new TutorialLevel();
        this.addScene('tutorialLevel', Level0);
    }
}

new Game();

import { Actor, Engine, Vector, Color } from "excalibur";
import { TiledMapResource } from '@excaliburjs/plugin-tiled';
import { Resources, ResourceLoader } from "./resources.js";
import { DevTool } from "@excaliburjs/dev-tools";
import { StartMenu } from "./scenes/start-menu.js";
import { TutorialLevel } from "./scenes/level-0.js";
import { Taxi } from "./players/player-1";
import { Waterbus } from "./players/player-2";

export class Game extends Engine {
    constructor() {
        super();
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        const startMenu = new StartMenu();
        this.addScene('startMenu', startMenu);
        this.goToScene('startMenu');

        const taxi = new Taxi();
        this.add(taxi);

        const waterbus = new Waterbus();
        this.add(waterbus);

    }
}


const game = new Game();
const devtool = new DevTool(game);

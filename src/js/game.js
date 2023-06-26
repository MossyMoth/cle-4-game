import * as ex from "excalibur";
import { Actor, Engine, Vector, Color } from "excalibur";
import { TiledMapResource } from '@excaliburjs/plugin-tiled';
import { Resources, ResourceLoader } from "./resources.js";
import { DevTool } from "@excaliburjs/dev-tools";
import { StartMenu } from "./scenes/start-menu.js";

export class Game extends Engine {
    constructor() {
        super();
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        const startMenu = new StartMenu();
        this.addScene('startMenu', startMenu);
        this.goToScene('startMenu');
    }
}


const game = new Game();
const devtool = new DevTool(game);

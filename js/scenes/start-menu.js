import * as ex from "excalibur";
import { Game } from "../game";
//import level-0 from './level-0'


export class StartMenu extends ex.Scene {
    constructor() {
        super();
    }

    onInitialize() {
        console.log("start menu");
        //tilemap setup
    }

    onPreUpdate(engine) {

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.Space)) {
            console.log("input");
            engine.goToScene('tutorialLevel');
        }
    }
}
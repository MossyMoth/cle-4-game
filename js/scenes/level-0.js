import * as ex from "excalibur";
import { Game } from "../game";
//import level-0 from './level-0'


export class TutorialLevel extends ex.Scene {
    constructor() {
        super();
    }

    onInitialize() {
        console.log("tutorial level");
        //tilemap setup
    }

    onPreUpdate(engine) {

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.Space)) {
            console.log("tutorial input");
        }
    }
}
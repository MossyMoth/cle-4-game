import * as ex from "excalibur";
import { Game } from "../game";
//import level-0 from './level-0'
import { TutorialLevel } from "./level-0.js";


export class StartMenu extends ex.Scene {
    constructor() {
        super();
    }

    onInitialize() {
        console.log("start menu");
        // setup
    }

    onPreUpdate(engine) {

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.Space)) {
            console.log("input");
            
            const Level0 = new TutorialLevel();
            engine.addScene('tutorialLevel', Level0);
            engine.goToScene('tutorialLevel');
        }
    }
}
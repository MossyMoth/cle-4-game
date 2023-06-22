import * as ex from "excalibur";
import { Game } from "../game";
import { ResourceLoader, Resources}  from "../resources.js";
import { TutorialLevel } from "./level-0.js";



export class StartMenu extends ex.Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        const Background = new ex.Actor({
            x: 0,
            y: 0,
        });
        Background.graphics.use(Resources.Background.toSprite());
        this.add(Background);
        console.log(Background);
    
        let camera = engine.currentScene.camera;
        camera.strategy.lockToActor(Background);
        this.camera.zoom = 1.5;
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


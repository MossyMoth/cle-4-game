import * as ex from "excalibur";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";
import { Taxi } from "../players/player-1";
import { Resources, ResourceLoader } from "../resources.js";
import { deathScreen } from "../scenes/death-screen.js";
//import level-0 from './level-0'


export class TutorialLevel extends ex.Scene {
    constructor() {
        super();
    }

    
    onInitialize(engine) {
        console.log("tutorial level");
        Resources.TestMap.addTiledMapToScene(engine.currentScene);

        let tiledMapData = Resources.TestMap.data.getExcaliburObjects();
        let spawnPos = tiledMapData[0]["objects"][0];
        let spawnPosX = spawnPos.x;
        let spawnPosY = spawnPos.y;
        
        const taxi = new Taxi(spawnPosX, spawnPosY);
        this.add(taxi);

        let cam = this.camera;
        cam.strategy.lockToActor(taxi);
        this.camera.zoom = 1;
    }

    onPreUpdate(engine) {

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.Space)) {
            console.log("tutorial input");
    
        }

        if (engine.input.keyboard.wasPressed(ex.Input.Keys  .Q)) {
            console.log("input");
      
            const deathscreen = new deathScreen();
            engine.addScene("deathScene", deathscreen);
            engine.goToScene("deathScene");
          }
    }
}



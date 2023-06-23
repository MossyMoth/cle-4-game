import * as ex from "excalibur";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";
import { Taxi } from "../players/player-1";
import { Resources, ResourceLoader } from "../resources.js";
//import level-0 from './level-0'


export class TutorialLevel extends ex.Scene {
    constructor() {
        super();
    }

    
    onInitialize(engine) {
        console.log("tutorial level");
        console.log(this);
        Resources.TestMap.addTiledMapToScene(engine.currentScene);

        let tiledMapData = Resources.TestMap.data.getExcaliburObjects();
        let spawnPos = tiledMapData[0]["objects"][0];
        let spawnPosX = spawnPos.x;
        let spawnPosY = spawnPos.y;


        const Background = new ex.Actor({
            x: 0,
            y: 0,
            
        })


        
        for (let obj in tiledMapData[0]["objects"]) {
            let ObjPos = ex.vec(tiledMapData[0]["objects"][obj].x, tiledMapData[0]["objects"][obj].y);
            console.log(tiledMapData[0]["objects"][obj].name);
            this.TargetMarker = new ex.Actor({
                pos: ObjPos,
                collisionType: ex.CollisionType.Fixed,
                width: 48,
                height: 13,
            })
            console.log(this.TargetMarker);
            this.TargetMarker.on('collisionstart', (ev) => {
                if (ev.other._name === 'taxi') {
                    console.log("boop")
                }
            })
            this.add(this.TargetMarker)
        }

        const taxi = new Taxi(spawnPosX, spawnPosY);
        this.add(taxi);

        let cam = this.camera;
        cam.strategy.lockToActor(taxi);
        this.camera.zoom = 1.5;

    }

    onPreUpdate(engine) {

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.Space)) {
            console.log("tutorial input");
        }
    }
}



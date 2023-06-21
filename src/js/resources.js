import { ImageSource, Sound, Resource, Loader, TileMap } from "excalibur";
import { TiledMapResource } from '@excaliburjs/plugin-tiled';
import taxiImage from "../assets/other-assets/watertaxi.png";
import testMap from "../assets/level-assets/TestMap.tmx";

const Resources = {
    Taxi: new ImageSource(taxiImage),
    TestMap: new TiledMapResource(testMap)
};

// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray);

export { Resources, ResourceLoader };

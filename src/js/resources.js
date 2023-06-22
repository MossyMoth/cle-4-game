import { ImageSource, Sound, Resource, Loader, TileMap, Color } from "excalibur";
import { TiledMapResource } from '@excaliburjs/plugin-tiled';
import taxiImage from "../assets/other-assets/watertaxi.png";
import testMap from "../assets/level-assets/TestMap.tmx";
import busImage from "../assets/other-assets/waterbus.png";
import startBackground from "../assets/other-assets/startBackground.jpg";

const Resources = {
    Taxi: new ImageSource(taxiImage),
    Waterbus: new ImageSource(busImage),
    TestMap: new TiledMapResource(testMap),
    Background: new ImageSource(startBackground)
};

// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}


const ResourceLoader = new Loader(resourceArray);
ResourceLoader.suppressPlayButton = true
export { Resources, ResourceLoader };

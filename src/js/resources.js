import { ImageSource, Sound, Resource, Loader, TileMap, Color } from "excalibur";
import { TiledMapResource } from '@excaliburjs/plugin-tiled';
import taxiImage from "../assets/other-assets/watertaxi.png";
import Level0Map from "../assets/level-assets/Level-0-Map.tmx";
import busImage from "../assets/other-assets/waterbus.png";
import startBackground from "../assets/other-assets/start-scherm.png";
import logo from "../assets/other-assets/Logo.png";
import start from "../assets/other-assets/Press-Start.png";
import reloadButton from "../assets/other-assets/retrynobg.png";

//Obstacle Resources
import buoyImage from "../assets/level-assets/obstacles/easy/boei.png";
import wharfLeft16Image from "../assets/level-assets/obstacles/easy/kade-links-16.png";
import wharfLeft48Image from "../assets/level-assets/obstacles/easy/kade-links-48.png";
import wharfLeft80Image from "../assets/level-assets/obstacles/easy/kade-links-80.png";
import wharfRight16Image from "../assets/level-assets/obstacles/easy/kade-rechts-16.png";
import wharfRight48Image from "../assets/level-assets/obstacles/easy/kade-rechts-48.png";
import wharfRight80Image from "../assets/level-assets/obstacles/easy/kade-rechts-80.png";


const Resources = {
    Taxi: new ImageSource(taxiImage),
    Waterbus: new ImageSource(busImage),
    TutorialMap: new TiledMapResource(Level0Map),
    Background: new ImageSource(startBackground),
    Logo: new ImageSource(logo),
    Start: new ImageSource(start),
    Reload: new ImageSource(reloadButton),
    //Obstacle Resources
    Buoy: new ImageSource(buoyImage),
    wharfLeft16: new ImageSource(wharfLeft16Image),
    wharfLeft48: new ImageSource(wharfLeft48Image),
    wharfLeft80: new ImageSource(wharfLeft80Image),
    wharfRight16: new ImageSource(wharfRight16Image),
    wharfRight48: new ImageSource(wharfRight48Image),
    wharfRight80: new ImageSource(wharfRight80Image)
};

// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}


const ResourceLoader = new Loader(resourceArray);
ResourceLoader.suppressPlayButton = true
export { Resources, ResourceLoader };
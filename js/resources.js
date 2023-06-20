import { ImageSource, Sound, Resource, Loader } from "excalibur";
import taxiImage from "../assets/other-assets/watertaxi.png";
import busImage from "../assets/other-assets/waterbus.png";

const Resources = {
  Taxi: new ImageSource(taxiImage),
  Waterbus: new ImageSource(busImage)
};
// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }

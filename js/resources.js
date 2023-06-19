import { ImageSource, Sound, Resource, Loader } from "excalibur";
import taxiImage from "/assets/other-assets/watertaxi.png";
import busImage from "/assets/other-assets/waterbus.png";

const Resources = {
  Taxi: new ImageSource(taxiImage),
  Bus: new ImageSource(busImage),
};
const ResourceLoader = new Loader([Resources.Taxi], [Resources.Bus]);

export { Resources, ResourceLoader };

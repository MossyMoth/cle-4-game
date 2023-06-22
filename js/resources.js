import { ImageSource, Sound, Resource, Loader } from "excalibur";
import taxiImage from "/assets/other-assets/watertaxi.png";

const Resources = {
    Taxi: new ImageSource(taxiImage)
};
const ResourceLoader = new Loader([Resources.Taxi]);

export { Resources, ResourceLoader };

import img from "../../content/projects/ODST/thumb.png";
import img_placeholder from "../../content/projects/ODST/thumb_placeholder.png";
import teaser from "../../content/projects/ODST/Arcimboldo_Transfer.png";
import router from "./router";

const Meta = {
    title: "Objects as Semantics in Style Transfer",
    thumb: img,
    placeholder: img_placeholder,
    teaser: teaser,
    tags: ["Python", "TensorFlow"],
    date: "2023-05-05",
    abstract: "Using object segmentation to preserve semantic composition during style transfer.",
    legacy: false,
    route: "/ODST",
    router: router
}

export default Meta;
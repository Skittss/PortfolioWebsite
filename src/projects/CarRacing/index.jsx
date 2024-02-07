import img from "../../content/projects/CarRacing/thumb.png";
import img_placeholder from "../../content/projects/CarRacing/thumb_placeholder.png";
import router from "./router";

const Meta = {
    title: "Car Racing via Deep Q Learning",
    thumb: img,
    placeholder: img_placeholder,
    tags: ["Python", "TensorFlow"],
    date: "2023-01-09",
    abstract: "Using reinforcement learning to race a physically-based car simulation.",
    legacy: false,
    route: "/CarRacing",
    router: router
}

export default Meta;
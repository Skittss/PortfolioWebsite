import img from "../../content/projects/Webgl-Canny/Canny-thumbnail.png";
import img_placeholder from "../../content/projects/Webgl-Canny/Canny-thumbnail_placeholder.png";

import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";

const projTitle = "WebGL Canny Edge Detection";

const Home = React.lazy(() => import("./home"));
const Main = React.lazy(() => import("./src/main"));

const routes = [
    {path: "/", component: Home, exact: true},
    {path: "/main", component: Main, exact: true},
];

const Router = ({routerDepth}) => {
    return (
        <>
        <Helmet><title>{projTitle}</title></Helmet>
        <SubRouter routes={routes} routerDepth={routerDepth} />
        </>
    );
}

const Meta = {
    title: projTitle,
    thumb: img,
    placeholder: img_placeholder,
    date: "2021-06-03",
    abstract: "GPU-accelerated edge detection on the web.",
    tags: ["GLSL", "ThreeJS", "ReactJS", "~~antd~~"],
    legacy: false,
    route: "/Webgl-Canny",
    router: Router
}

export {Router, Meta};
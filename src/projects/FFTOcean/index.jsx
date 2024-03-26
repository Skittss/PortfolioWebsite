import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";

import img from "../../content/projects/FFTOcean/thumb.png";
import img_placeholder from "../../content/projects/FFTOcean/thumb_placeholder.png"

const projTitle = "FFT Ocean Generation";

const Home = React.lazy(() => import("./home"));

const routes = [
    {path: "/", component: Home, exact: true},
];

const Router = ({routerDepth}) => {
    return (
        <>
        <Helmet><title>{projTitle}</title></Helmet>
        <SubRouter routes={routes} routerDepth={routerDepth} />
        </>
    );
}

export default Router;

const Meta = {
    title: projTitle,
    thumb: img,
    placeholder: img_placeholder,
    tags: ["GLSL", "ThreeJS"],
    date: "2022-01-23",
    abstract: "Fast ocean shaders on the web via vertex displacement.",
    legacy: false,
    route: "/FFTOcean",
    router: Router
}

export {Router, Meta};
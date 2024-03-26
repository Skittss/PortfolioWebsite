import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";

import img from "../../content/projects/FourierSketcher/thumb.png";
import img_placeholder from "../../content/projects/FourierSketcher/thumb_placeholder.png";

const projTitle = "Fourier Sketcher (Prototype)";

const Home = React.lazy(() => import("./home"));
// const Main = React.lazy(() => import("./src/main"));

const routes = [
    {path: "/", component: Home, exact: true},
    // {path: "/main", component: Main, exact: true},
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
    date: "2021-01-11",
    abstract: "Drawing images with epicycles generated from FFT.",
    tags: ["JavaScript", "~~p5js~~"],
    legacy: false,
    route: "/FourierSketcher",
    router: Router
}

export {Router, Meta};
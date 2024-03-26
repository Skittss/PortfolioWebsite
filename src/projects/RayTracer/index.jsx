import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";

import img from "../../content/projects/RayTracer/thumb.png";
import img_placeholder from "../../content/projects/RayTracer/thumb_placeholder.png";

const projTitle = "C++ RayTracer";

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

const Meta = {
    title: projTitle,
    thumb: img,
    placeholder: img_placeholder,
    tags: ["C++", "~~ray-tracing~~"],
    date: "2022-12-08",
    abstract: "A photon-mapping based raytracer written in C++ from first principles.",
    legacy: false,
    route: "/RayTracer",
    router: Router
}

export {Router, Meta};
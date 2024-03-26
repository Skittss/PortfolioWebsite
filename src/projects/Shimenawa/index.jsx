import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";

import img from "../../content/projects/Shimenawa/day_thumb.png";
import img_placeholder from "../../content/projects/Shimenawa/day_thumb_placeholder.png";
import teaser from "../../content/projects/Shimenawa/day_thumb.png";

const projTitle = "Shimenawa";

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
    title:  projTitle,
    thumb: img,
    placeholder: img_placeholder,
    teaser: teaser,
    tags: ["GLSL", "~~ray-marching~~"],
    date: "2024-01-13",
    abstract: "Ray marching complex scenes with implicit geometry and physically based volumetrics.",
    legacy: false,
    route: "/Shimenawa",
    router: Router
}

export {Router, Meta};
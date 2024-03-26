import img from "../../content/projects/ODST/thumb.png";
import img_placeholder from "../../content/projects/ODST/thumb_placeholder.png";
import teaser from "../../content/projects/ODST/Arcimboldo_Transfer.png";

import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";

const projTitle = "Objects as Semantics in Style Transfer";

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
    teaser: teaser,
    tags: ["Python", "TensorFlow"],
    date: "2023-05-05",
    abstract: "Using object segmentation to preserve semantic composition during style transfer.",
    legacy: false,
    route: "/ODST",
    router: Router
}

export {Router, Meta};
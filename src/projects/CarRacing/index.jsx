import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";

import img from "../../content/projects/CarRacing/thumb.png";
import img_placeholder from "../../content/projects/CarRacing/thumb_placeholder.png";

const projTitle = "Car Racing via Deep Q Learning";

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
    tags: ["Python", "TensorFlow"],
    date: "2023-01-09",
    abstract: "Using reinforcement learning to race a physically-based car simulation.",
    legacy: false,
    route: "/CarRacing",
    router: Router
}

export {Router, Meta};
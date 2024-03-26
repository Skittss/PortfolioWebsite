import React from 'react';
import SubRouter from "../web/routers/subrouter";

// Lazy load router component, not default export
const Shimenawa = React.lazy(() => import("./Shimenawa/.").then((module) => ({default: module.Router})));
const ODST = React.lazy(() => import("./ODST/.").then((module) => ({default: module.Router})));
const RayTracer = React.lazy(() => import("./RayTracer/.").then((module) => ({default: module.Router})));
const CarRacing = React.lazy(() => import("./CarRacing/.").then((module) => ({default: module.Router})));
const WebglCanny = React.lazy(() => import("./Webgl-Canny/.").then((module) => ({default: module.Router})));
const FourierSketcher = React.lazy(() => import("./FourierSketcher/.").then((module) => ({default: module.Router})));
const FFTOcean = React.lazy(() => import("./FFTOcean/.").then((module) => ({default: module.Router})));
const Projects = React.lazy(() => import("../web/projects"));

const routes = [
    {path: "/", component: Projects, exact: true, baseRoute: true},
    {path: "/Webgl-Canny/*", component: WebglCanny, exact: false},
    {path: "/FourierSketcher", component: FourierSketcher, exact: false},
    {path: "/FFTOcean", component: FFTOcean, exact: false},
    {path: "/CarRacing", component: CarRacing, exact: false},
    {path: "/RayTracer", component: RayTracer, exact: false},
    {path: "/ODST", component: ODST, exact: false},
    {path: "/Shimenawa", component: Shimenawa, exact: false},
];

const ProjectsRouter = ({routerDepth}) => {

    return (
        <SubRouter routes={routes} routerDepth={routerDepth} />
    )
}

export default ProjectsRouter
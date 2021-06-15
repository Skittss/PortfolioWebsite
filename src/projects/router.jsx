import React from 'react';
import SubRouter from "../web/routers/subrouter";

const Tetnet = React.lazy(() => import("./Tetnet/router"));
const WebglCanny = React.lazy(() => import("./Webgl-Canny/router"));
const Projects = React.lazy(() => import("../web/projects"));

const routes = [
    {path: "/", component: Projects, exact: true},
    {path: "/Webgl-Canny", component: WebglCanny, exact: false},
    {path: "/tetnet", component: Tetnet, exact: false}
];

const ProjectsRouter = ({routerDepth}) => {

    return (
        <SubRouter routes={routes} routerDepth={routerDepth} />
    )
}

export default ProjectsRouter
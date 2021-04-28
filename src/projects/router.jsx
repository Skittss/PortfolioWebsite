import React from 'react';
import SubRouter from "../web/routers/subrouter";

const FourierSketcher = React.lazy(() => import("./FourierSketcher/router"));
const Projects = React.lazy(() => import("../web/projects"));

const routes = [
    {path: "/", component: Projects, exact: true},
    {path: "/FourierSketcher", component: FourierSketcher, exact: false},
];

const ProjectsRouter = ({routerDepth}) => {

    return (
        <SubRouter routes={routes} routerDepth={routerDepth} />
    )
}

export default ProjectsRouter
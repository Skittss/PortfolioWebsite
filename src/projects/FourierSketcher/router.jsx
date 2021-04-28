import React from 'react';
import SubRouter from "../../web/routers/subrouter";

const Home = React.lazy(() => import("./home"));
const Main = React.lazy(() => import("./src/main"));
//const Main = React.lazy(() => import("../projects"));

const routes = [
    {path: "/", component: Home, exact: true},
    {path: "/main", component: Main, exact: true},
];

const Router = ({routerDepth}) => {
    return (
        <SubRouter routes={routes} routerDepth={routerDepth} />
    );
}

export default Router;
import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";

const Home = React.lazy(() => import("./home"));
const Main = React.lazy(() => import("./src/main"));

const routes = [
    {path: "/", component: Home, exact: true},
    {path: "/main", component: Main, exact: true},
];

const Router = ({routerDepth}) => {
    return (
        <>
        <Helmet><title>Q-Learning Tetris NN</title></Helmet>
        <SubRouter routes={routes} routerDepth={routerDepth} />
        </>
    );
}

export default Router;
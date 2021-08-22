import React from 'react';
import { Helmet } from 'react-helmet';
import SubRouter from "../../web/routers/subrouter";
import Meta from '.';

const Home = React.lazy(() => import("./home"));

const routes = [
    {path: "/", component: Home, exact: true},
];

const Router = ({routerDepth}) => {
    return (
        <>
        <Helmet><title>{Meta.title}</title></Helmet>
        <SubRouter routes={routes} routerDepth={routerDepth} />
        </>
    );
}

export default Router;
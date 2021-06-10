import React, { Suspense, useState } from 'react';
import { Redirect, Route, Switch} from "react-router-dom";
import Navbar from "../navbar";
import { Layout } from 'antd';
import { load } from "../../App";
const { Header, Content } = Layout;

const HomePage = React.lazy(() => import("../home"));
const ProjectRouter = React.lazy(() => import("../../projects/router"));

const baseRoute = "PortfolioWebsite";

const routes = [
    { path: baseRoute + "/home", name: "test", component: HomePage, exact: true},
    { path: baseRoute + "/projects", name: "projects", component: ProjectRouter, exact: false}
];

const Main = props => {

    return (
        <Layout className="main">
            <Navbar />
            <Content className="main-content">
                <Suspense fallback={load()}>
                    <Switch>
                        {routes.map(route => {
                            return route.component ? (
                                <Route 
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} routerDepth={1}/>
                                    )}
                                />
                            ) : null;
                        })}
                        <Redirect exact from={baseRoute+"/"} to="home" />
                    </Switch>
                </Suspense>
            </Content>
        </Layout>
    );
}

export default Main;
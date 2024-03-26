import React, { Suspense, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../navbar";
import { Layout } from 'antd';
import { load } from "../../App";
const { Header, Content } = Layout;

// Top Level
const HomePage = React.lazy(() => import("../home/home"));
const AboutPage = React.lazy(() => import("../about"))
const ProjectRouter = React.lazy(() => import("../../projects/router"));

const routes = [
    { path: "/home", name: "test", component: HomePage, exact: true},
    { path: "/about", name: "about", component: AboutPage, exact: true},
    { path: "/projects/*", name: "projects", component: ProjectRouter, exact: false}

];

const Main = props => {

    return (
        <Layout className="main">
            <Navbar />
            <Content className="main-content">
                <Suspense fallback={load()}>
                    <Routes>
                        {/* <Route index ></Route> */}
                        {/* <Route exact path="/home" name="home" element={<HomePage/>}/>
                        <Route exact path="/about" name="about" element={<AboutPage/>}/>
                        <Route exact path="/projects" name="projects" element={<ProjectPage/>}>
                            <Route path="Shimenawa" name="shimenawa" element={<Proj_Shimenawa/>}/>
                        </Route> */}
                        {routes.map(route => {
                            return route.component ? (
                                <Route 
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.component routerDepth={1}/>}
                                />
                            ) : null;
                        })}
                        <Route exact path="/" element={<Navigate to="home"/>}/> 
                    </Routes>
                </Suspense>
            </Content>
        </Layout>
    );
}

export default Main;
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
const { Header } = Layout;

const Navbar = () => {
    const pathname = useLocation().pathname;
    let subrouteIndex = pathname.indexOf("/", 1);
    subrouteIndex = subrouteIndex < 0 ? pathname.length : subrouteIndex;
    const parentRoute = pathname === "/" ? "/home" : pathname.substring(0, subrouteIndex);
    return (
        <Header className="navigation" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[parentRoute]} >
                <Menu.Item key="/home">
                    HOME
                    <Link to="/home" />
                </Menu.Item>
                <Menu.Item key="/projects">
                    PROJECTS
                    <Link to="/projects"/>
                </Menu.Item>
            </Menu>
        </Header> 
    )
}

export default Navbar
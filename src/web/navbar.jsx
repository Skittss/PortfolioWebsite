import "../css/navbar.scss";

import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
const { Header } = Layout;

const Navbar = () => {

    function getMenuKeyFromPath(pth) {
        const pathname = pth;
        let subrouteIndex = pathname.indexOf("/", 1);
        subrouteIndex = subrouteIndex < 0 ? pathname.length : subrouteIndex;
        return pathname === "/" ? "/home" : pathname.substring(0, subrouteIndex);
    }
    const [menuKey, setMenuKey] = useState(getMenuKeyFromPath(useLocation().pathname))

    const history = useHistory()

    useEffect(() => {
        return history.listen((loc) => {
            setMenuKey(getMenuKeyFromPath(loc.pathname))
        })
    }, [history])
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
    		const updateDimension = () => {
      			setScreenSize(getCurrentDimension())
    		}
    		window.addEventListener('resize', updateDimension);
    
		
    		return(() => {
        		window.removeEventListener('resize', updateDimension);
    		})
  	}, [screenSize])
    
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;
    
        window.addEventListener('scroll', e => {
    
            // Get the new Value
            currentScrollPosition = window.pageYOffset;

            //Subtract the two and conclude
            if (currentScrollPosition <= screenSize.height) {
                setHidden(false);
                return
            }

            if (previousScrollPosition - currentScrollPosition < 0) {
            console.log("Hiding...")
            setHidden(true);
            } else if (previousScrollPosition - currentScrollPosition > 0) {
            setHidden(false);
            }

            // Update the previous value
            previousScrollPosition = currentScrollPosition;
        });
    }, []);

    return (
        <Header className={`navigation ${hidden ? "hidden" : ""}`} style={{zIndex: 1, width: '100%', paddingLeft: 0, paddingRight: 0}}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={[menuKey]}
                selectedKeys={[menuKey]}
                onClick={({key}) => setMenuKey(key)}
            >
                <Menu.Item key="/home" style={{float: 'left', opacity: menuKey === "/home" ? 0 : 1, visibility: menuKey === "/home" ? "hidden" : "visible", transition: "all 0.3s ease-in"}} hidden={hidden}>
                    HOME
                    <Link to="/home" />
                </Menu.Item>
                <Menu.Item key="/projects" style={{marginLeft: 'auto'}}>
                    PROJECTS
                    <Link to="/projects"/>
                </Menu.Item>
                <Menu.Item>
                    ABOUT
                </Menu.Item>
                <Menu.Item key="github">                    
                    <a href={"https://github.com/Skittss"}>
                        <GithubOutlined style={{marginRight: 0, fontSize: "20px"}}/>
                    </a>
                </Menu.Item>
            </Menu>
        </Header> 
    )
}

export default Navbar
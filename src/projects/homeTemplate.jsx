import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Divider, Tooltip, Image } from 'antd';
import { GithubOutlined, SendOutlined } from '@ant-design/icons';

import "../css/projectpage.scss";

const HomeTemplate = ({title, githubURL, projectRoute, projectLink, thumb}) => {
    const loc = useLocation().pathname;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <div style={{
            marginTop: "-3rem",
            backgroundImage: `url(${thumb})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            zIndex: -1,
        }} />
        <div className="project-home-wrapper" style={{position: "absolute", width: "100%", top: "101vh", left: "0px", transform: "translate(0, -100%)"}}>
            <header className="home-header">
                <h1 id="title" style={{display: 'inline-block'}}>{title}</h1>
                <span style={{padding: "0 1em", display: 'inline-block'}}>
                    {githubURL != undefined ? (
                        <Tooltip title="View on Github" placement="bottom">
                            <a href={githubURL} target="_blank">
                                <GithubOutlined className="title-icon"/>
                            </a>
                        </Tooltip>
                    ) : null}

                    {projectRoute != undefined  ? (
                        <Tooltip title="View project" placement="bottom">
                            <Link to={loc + projectRoute}>
                                <SendOutlined className="title-icon"/>
                            </Link>
                        </Tooltip>
                    ) : null}

                    {projectLink != undefined  ? (
                        <Tooltip title="View project" placement="bottom">
                            <a href={projectLink} target="_blank">
                                <SendOutlined className="title-icon"/>
                            </a>
                        </Tooltip>
                    ) : null}

                </span>
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            </header>
            <div style={{height: "8em"}}>

            </div>
        </div>
        </>
    );
}

export default HomeTemplate;
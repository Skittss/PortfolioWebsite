import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Divider, Tooltip } from 'antd';
import { GithubOutlined, SendOutlined } from '@ant-design/icons';

const HomeTemplate = ({title, githubURL, projectRoute, projectLink}) => {
    const loc = useLocation().pathname;
    return (
        <div className="project-home-wrapper">
            <header className="home-header">
                <a name="top" />
                <h1 id="title" style={{display: 'inline-block'}}>{title}</h1>
                <span style={{padding: "0 1em", display: 'inline-block'}}>
                    {githubURL != undefined ? (
                        <Tooltip title="View on Github" placement="bottom">
                            <a href={githubURL} target="_blank">
                                <GithubOutlined style={{fontSize: "40px", padding: "0 0.2em"}}/>
                            </a>
                        </Tooltip>
                    ) : null}

                    {projectRoute != undefined  ? (
                        <Tooltip title="View project" placement="bottom">
                            <Link to={loc + projectRoute}>
                                <SendOutlined style={{fontSize: "40px", padding: "0 0.2em"}}/>
                            </Link>
                        </Tooltip>
                    ) : null}

                    {projectLink != undefined  ? (
                        <Tooltip title="View project" placement="bottom">
                            <a href={projectLink} target="_blank">
                                <SendOutlined style={{fontSize: "40px", padding: "0 0.2em"}}/>
                            </a>
                        </Tooltip>
                    ) : null}

                </span>
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            </header>
        </div>
    );
}

export default HomeTemplate;
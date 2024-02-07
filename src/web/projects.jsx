import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import { Link, useLocation } from 'react-router-dom';
import { Card, Tooltip, Grid, Row, Col, Divider } from 'antd';
import ProjectMetas from "../projects";

import "../css/projectpage.scss";

const { useBreakpoint } = Grid

const { Meta } = Card;

const _langTagColours = {
    "JavaScript": "#43FF97",
    "ReactJS": "#EE177C",
    "NodeJS": "#F15156",
    "C++": "#b83dff",
    "C#": "#04724D",
    "GLSL": "#00CECB",
    "ThreeJS": "#AEF78E",
    "Python": "#F5BB00",
    "TensorFlow": "#F95738"
}

const _getLangTagStyle = props => {
    var regex = new RegExp("^~~(.*)~~$");
    var brdr;
    var txt;
    var op;
    if (regex.test(props.text)) {
        brdr = "dashed";
        txt = props.text.slice(2, -2);
        op = 0.5;
    } else {
        brdr = "solid";
        txt = props.text;
        op = 1;
    }

    return {
        color: _langTagColours[txt] === undefined ? "whitesmoke" : _langTagColours[txt],
        border: brdr,
        text: txt,
        opacity: op
    }
}

const LangTags = props => {
    return (
        props.tags.map(tag => <span><LangTag text={tag}/>&nbsp;</span>)
    );
}

const LangTag = props => {   
    let s = _getLangTagStyle(props);
    
    return (
        <span class="LangTag" style={{color: s.color, borderColor: s.color, borderStyle: s.border, opacity: s.opacity}}>{s.text}</span>
    );
}

const _getCard = (pMeta, thumb, large, screens) => {
    if (screens.sm) return _getProjectCard(pMeta, thumb, large);
    return _getProjectCardVertical(pMeta, thumb, large)
}

const _getProjectCardVertical = (pMeta, thumb, large) => {

    return (
        <Col span={24} style={{
            padding: 0,
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}>
            <Row>
                <div style={{
                    aspectRatio: "1 / 1",
                    backgroundImage: `url(${thumb || pMeta.placeholder})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: "100%",
                }}/>
                <div style={{
                    position: 'absolute',
                    aspectRatio: "1 / 1",
                    top: 0,
                    left: 0,
                    width: "100%",
                    background: "linear-gradient(180deg, rgba(21,25,31,0) 0%, rgba(21,25,31,1) 100%)"
                }} />
            </Row>
            <Row>
                <div className="project-content-wrapper" style={{
                    marginLeft: "20px", marginRight: "10px", width: "100%",
                    paddingTop: "10px", textAlign: "center"
                }}>
                    <h1 style={{marginBottom: "5px", fontSize: large ? "calc(2.4em + 0.2vw)" : "calc(1.4em + 0.2vw)"}}>{pMeta.title}</h1>
                    {pMeta.date ? (
                        <p className="hint-text" style={{marginBottom: "15px"}}>{pMeta.date}</p>
                    ) : null}
                    <LangTags tags={pMeta.tags}/>
                    <p style={{marginTop: "10px"}}>
                        {pMeta.abstract ? pMeta.abstract : ""}
                    </p>

                </div>
            </Row>
        </Col>
    )

}

const _getProjectCard = (pMeta, thumb, large, screens) => {

    return (
        <Row style={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}>
        <Col span={8} style={{position: "relative"}}>
            <div style={{
                aspectRatio: "1 / 1",
                backgroundImage: `url(${thumb || pMeta.placeholder})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: "100%"
            }}/>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, rgba(21,25,31,0) 0%, rgba(21,25,31,1) 100%)"
            }} />
        </Col>
        <Col span={16} style={{contain: "size"}}>
            <div className="project-content-wrapper" style={{
                marginLeft: "20px", marginRight: "10px",
                paddingTop: "10px",
            }}>
                <h1 style={{marginBottom: "5px", fontSize: large ? "calc(2.4em + 0.2vw)" : "calc(1.4em + 0.2vw)"}}>{pMeta.title}</h1>
                {pMeta.date ? (
                    <p className="hint-text" style={{marginBottom: "15px"}}>{pMeta.date}</p>
                ) : null}
                <LangTags tags={pMeta.tags}/>
                <p style={{marginTop: "10px"}}>
                    {pMeta.abstract ? pMeta.abstract : ""}
                </p>

            </div>
        </Col>
        </Row>
    );
}

const Projects = () => {

    const screens = useBreakpoint();
    const loc = useLocation();

    const primaryColSpan = screens.xl ? 12 : 24;
    const primaryColProjIdxStart = screens.xl ? 1 : 0;
    const primaryColGutter = screens.sm ? [16, 16] : [0, 16];
    
    const [sources, setSource] = useState(ProjectMetas.map(meta => null));

    useEffect(() => {
        ProjectMetas.map((meta, idx) => {
            const src_img = new Image();
            src_img.src = meta.thumb;
            src_img.onload = () => {
                setSource(sources => {
                    console.log(sources);
                    let newSources = sources.map((src, src_idx) => {
                        if (src_idx == idx) return meta.thumb;
                        return src;
                    })
                    return newSources;
                })
                console.log(idx);
            }
        })
    }, [])

    return (
        <div className={screens.xl ? 'padded-main' : 'unpadded-main'}>
        <div className="project-view">
            <FadeIn>

                {screens.xl ? (
                    <Row style={{paddingBottom: 16}} justify="center">
                        <Col span={16}>
                            <Link to={loc.pathname + ProjectMetas[0].route}>
                                {_getCard(ProjectMetas[0], sources[0], true, screens)}                                
                            </Link>
                        </Col>
                    </Row>
                ) : null}

                <Row gutter={primaryColGutter} justify="center" align="middle">
                    {
                        ProjectMetas.slice(primaryColProjIdxStart).map((pMeta, idx) => {
                            if (pMeta.legacy) {
                                return null
                            }
                            if (pMeta.route === null) {
                                return (
                                    <Col span={primaryColSpan}>
                                        <Tooltip title={pMeta.tooltip ? pMeta.tooltip : "This project has no page yet."} placement="bottom">
                                            {_getCard(pMeta, sources[primaryColProjIdxStart + idx], false, screens)}
                                        </Tooltip>
                                    </Col>
                                );
                            } else {
                                return (
                                    <Col span={primaryColSpan}>   
                                        <Link to={loc.pathname + pMeta.route}>
                                            {_getCard(pMeta, sources[primaryColProjIdxStart + idx], false, screens)}                                
                                        </Link>
                                    </Col>
                                );
                            }
                        })
                    }
                </Row>
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5, marginBottom: 0, marginTop: "10vh"}}/>
                <div className="project-content-wrapper" style={{paddingTop: 0}}>
                    <h1 align="middle" style={{fontSize: "2.5em", padding: "30px 0", marginBottom: "5vh"}}>
                        MISC. PROJECTS (LINK ONLY)
                    </h1>
                </div>
                <Row gutter={primaryColGutter} justify="center" align="middle">
                    {
                        ProjectMetas.map((pMeta, idx) => {
                            if (!pMeta.legacy) {
                                return null
                            }
                            if (pMeta.route === null) {
                                return (
                                    <Col span={primaryColSpan}>
                                        <Tooltip title={pMeta.tooltip ? pMeta.tooltip : "This project has no link yet."} placement="bottom">
                                            {_getCard(pMeta, sources[idx], false, screens)}
                                        </Tooltip>
                                    </Col>
                                );
                            } else {
                                return (
                                    <Col span={primaryColSpan}>
                                        {pMeta.tooltip ? (
                                            <Tooltip title={pMeta.tooltip} placement="bottom">
                                                <a href={pMeta.route}>
                                                    {_getCard(pMeta, sources[idx], false, screens)}                                
                                                </a>
                                            </Tooltip>
                                        ) : (
                                            <a href={pMeta.route}>
                                                {_getCard(pMeta, sources[idx], false, screens)}                                
                                            </a>
                                        )}
                                    </Col>
                                );
                            }
                        })
                    }
                </Row>
            </FadeIn>
        </div>
        <div className="project-footer-wrapper" style={{
            display: "flex", justifyContent: "center", 
            marginTop: "4vh", marginBottom: "3vh",
        }}>
            ❋ That's all for now! ❋
        </div>
        </div>
    );
}

export default Projects;
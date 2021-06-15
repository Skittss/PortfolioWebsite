import React from 'react';
import FadeIn from 'react-fade-in';
import { Link, useLocation } from 'react-router-dom';
import { Card, Tooltip, Grid, Row, Col, Image } from 'antd';
import ProjectMetas from "../projects";



const { Meta } = Card;

const CoverImage = props => {
    return (
        <div className="cover-image-container">
            <Image preview={false} className="cover-image" alt={props.alt} src={props.src}/>
            <div className="fade-out"/>
        </div>
    );
}

const _langTagColours = {
    "JS": "#43FF97",
    "ReactJS": "#EE177C",
    "C++": "#F6B62C",
    "GLSL": "#00CECB",
    "ThreeJS": "#AEF78E"
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
        color: _langTagColours[txt] === undefined ? "#000000" : _langTagColours[txt],
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

const _getProjectCard = (pMeta) => {
    return (
        <Card hoverable style={{width: 300}} cover={<CoverImage alt={pMeta.title} src={pMeta.thumb}/>}>
            <Meta title={pMeta.title} description={<LangTags tags={pMeta.tags}/>} />
        </Card>
    );
}

const projects = () => {
    return (
        <div className="project-view">
            <FadeIn>
                <Row gutter={[16,16]} justify="center" align="middle">
                    {
                        ProjectMetas.map(pMeta => {
                            console.log(pMeta);
                            if (pMeta.route === null) {
                                return (
                                    <Col>
                                        <Tooltip title={pMeta.tooltip ? pMeta.tooltip : "This project has no page yet."} placement="bottom">
                                            {_getProjectCard(pMeta)}
                                        </Tooltip>
                                    </Col>
                                );
                            } else {
                                return (
                                    <Col>   
                                        <Link to={useLocation().pathname + pMeta.route}>
                                            {_getProjectCard(pMeta)}                                
                                        </Link>
                                    </Col>
                                );
                            }
                        })
                    }
                </Row>
            </FadeIn>
        </div>
    );
}

export default projects;
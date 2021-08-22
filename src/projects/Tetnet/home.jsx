import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image } from 'antd';
import FadeIn from 'react-fade-in';
import HomeTemplate from '../homeTemplate';

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';

const Home = () => {

    return (
        
        <>
        <FadeIn>
            <HomeTemplate title={Meta.title} githubURL="https://github.com/Skittss/TensorflowTetris"></HomeTemplate>
            <div className="project-content-wrapper">
                <h1 className="raleway-title">
                    Contents
                </h1>
                <p style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <HashLink smooth to="#overview"><b>Overview</b></HashLink><br />
                    <HashLink smooth to="#ruleset"><b>Ruleset</b></HashLink><br />
                    <HashLink smooth to="#learning"><b>Learning</b></HashLink><br />
                </p>
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="overview" className="raleway-title">
                    Overview
                </h1>
                <p>
                    With this project I aim utilise machine learning to create an agent which plays Tetris to a superhuman level.
                    <br /><br />
                    The inspiration for this project came to me while looking at many other projects which tackle computers playing Tetris. Two common denominators I observed was that:
                    <br />
                    <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <Row style={{display: "flex", alignItems: "center", paddingTop: "10px"}}>
                        <Col flex="50px"><b>1)</b></Col>
                        <Col flex="1vw">
                            Others' AIs/Bots don't <i>look</i> like humans playing in general - they tend to rely on superhuman speed or brute force precognition to score and avoid losing,
                            instead of smartly utilising the techniques a human player might use.
                        </Col>
                    </Row>
                    
                    <Row style={{display: "flex", alignItems: "center", paddingTop: "10px"}}>
                        <Col flex="50px"><b>2)</b></Col>
                        <Col flex="1vw">
                            The rulesets for the implementations of Tetris in these projects are quite basic, and are not comparable to those in modern tetris games.
                        </Col>
                    </Row>
                    </div>
                    <br />
                    Hence, the aim of this project is to use human-playable techniques more optimally than a human while following a sophisticated modern guideline-based ruleset.

                </p>
                <p style={{color:"red"}}>
                    This project is currently a work in progress. You can find the state of the project on <a href="https://github.com/Skittss/TensorflowTetris" target="_blank">GitHub</a>.
                </p>

                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="ruleset" className="raleway-title">
                    Ruleset
                </h1>
                WIP
                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="learning" className="raleway-title">
                    Learning
                </h1>
                WIP
            </div>
        </FadeIn>
        </>
    )
}

export default Home;
import React, { Suspense, useEffect, useState, useRef, useCallback , useMemo} from 'react';
import { Button, Image, Row, Col, Grid, Divider, Spin } from 'antd'

import FadeIn from 'react-fade-in';
import "../css/home.scss";
import Seigaiha from './seigaiha/seigaiha';

import uob_logo from "../content/uob-logo.svg";
import piano_svg from "../content/piano.svg";
import pencil_svg from "../content/pencil.svg";
import flag_svg from "../content/flag.svg";
import camera_svg from "../content/camera.svg";

const { useBreakpoint } = Grid

const LegacyContainer = ({img, title, timestring, location, description}) => {
    const screens = useBreakpoint();

    return (
        <Row wrap={false} gutter={[20, 20]} style={{padding: "20px"}}>
            {screens.md ? (
                <Col flex="150px">
                    <img src={img} width="100%" stlye={{color: "whitesmoke"}}/>
                </Col>
            ) : null}
            <Col className="styled-text" flex="auto">
                <h1><b>{title}</b></h1>
                <h3 style={{color: 'silver'}}>
                    {timestring}
                </h3>
                <h3 style={{color: 'gray'}}>
                    {location}
                </h3>
                <h3>
                    {description}
                </h3>
            </Col>
        </Row>
    )
}

const AboutPage = () => {
    const screens = useBreakpoint();

    return (
        <FadeIn>
            <Seigaiha />

            <div className='padded-main'>
            <Row gutter={[20, 16]} wrap={!screens.md} style={{width: screens.xl ? "65%" : "100%", margin: "0 auto"}}>
                <Col flex="none" style={{textAlign: screens.md ? "right" : "center", margin: screens.xl ? '0 0 0 Max(0px, calc((50vw - 17.5vw - 320px) / 2))' : "0 auto"}}>
                    <Image
                        preview={false} 
                        fallback="Github profile picture"
                        placeholder={
                            <div style={{width: "300px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Spin style={{margin: "auto"}} size="large"/>
                            </div>
                        }
                        src="https://github.com/Skittss.png" 
                        width="300px"
                        style={{borderRadius: "50%", border: "solid 2px", borderColor: "whitesmoke"}}
                    />
                </Col>
                <Col flex="auto" style={{textAlign: screens.md ? "left" : "center", verticalAlign: screens.md? "middle" : "top"}}>
                    <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: screens.md ? "left" : "center", width: screens.xl ? 'calc(50vw - 17.5vw - 20px)' : "100%"}}>
                        <div className="styled-text">
                            <p style={{fontSize: 30, marginBottom: "5px", fontFamily: "'Raleway-Bold', sans-serif"}}>Hey there! 👋</p>
                            <p style={{marginBottom: "15px"}}>I'm Henry.</p>
                            <p style={{marginBottom: "15px"}}>
                                I'm a software engineer looking to work on interesting and 
                                challenging projects in Machine Learning, Computer Vision, and Graphics!
                            </p>
                            <p style={{marginBottom: "15px"}}>
                                I love all things graphics, and am particularly fond of their application in creative industries. 
                                My personal projects and interests tend to lay at the intersection of computer graphics and art.
                            </p>
                            <p style={{marginBottom: "5px"}}>Please take a look around! 😊</p>
                        </div>
                    </div>
                </Col>

            </Row>
            <div style={{margin: "0 auto", width: screens.xl ? "65%" : "100%", marginTop: "50px", marginBottom: "50px"}}>
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <LegacyContainer 
                    img={uob_logo} 
                    title="The University of Bath"
                    timestring="September 2020 to July 2023"
                    location="Bath, United Kingdom"
                    description={
                        <>
                        <b>BSc (Hons) Computer Science.</b> Grade: <u>First Class Honours</u>.
                        </>
                    }
                />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 className="heavy-title">
                    Other Interests
                </h1>
                <LegacyContainer 
                    img={flag_svg} 
                    title="Japanese / 日本語"
                    timestring=""
                    location=""
                    description={
                        <>
                        Intermediate level Japanese. Studied formally for two years at university through extracurricular classes.<br/><br/>
                        中級の日本語のレブルを持っています。 大学生時、二年間課外授業で勉強していました。
                        </>
                    }
                />
                <LegacyContainer 
                    img={piano_svg} 
                    title="Music Production & Performance"
                    timestring=""
                    location=""
                    description={
                        <>
                        Casual pianist of over 10 years.<br /><br />
                        I enjoy sound engineering and composition, and enjoy making arrangements of music from film and games. 
                        </>
                    }
                />
                <LegacyContainer 
                    img={pencil_svg} 
                    title="Illustration & Digital Art"
                    timestring=""
                    location=""
                    description={
                        <>
                        I like learning to draw human anatomy! I particularly enjoy drawing characters in manga/comic-like styles. 😊<br /><br />
                        Familiar with a wide range of programs in creative suites.
                        </>
                    }
                />
                <LegacyContainer 
                    img={camera_svg} 
                    title="Photography"
                    timestring=""
                    location=""
                    description={
                        <>
                        Hobbyist photographer. I shoot a mix of street photography, landscapes, nature, and architecture.<br /><br />
                        Currently using a Fujifilm X-T20 & FX 18-55mm f2.8-4 lens.
                        </>
                    }
                />
            </div>
            </div>
        </FadeIn>
    );
}

export default AboutPage
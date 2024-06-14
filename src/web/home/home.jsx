import React, { useState } from 'react';
import { Image, Row, Col, Grid, Divider, Spin } from 'antd'
import { Link } from 'react-router-dom'

import FadeIn from 'react-fade-in';
import "../../css/home.scss";
import { HashLink } from 'react-router-hash-link';
import Seigaiha from '../seigaiha/seigaiha';

const { useBreakpoint } = Grid

const HomePage = () => {
		const screens = useBreakpoint();

		const [imgLoaded, setImgLoaded] = useState(false);

		return (
			<FadeIn>
				<Seigaiha />

				<div className='padded-main'>
				<Row gutter={[20, 16]} wrap={!screens.md} justify="center">
					<Col style={{textAlign: screens.md ? "right" : "center"}}>
						<Image
							preview={false} 
							fallback="Github profile picture" 
							placeholder={
								<div style={{width: "300px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center"}}>
									<Spin style={{margin: "auto"}} size="large"/>
								</div>
							}
							onLoad={() => setImgLoaded(true)}
							src="https://github.com/Skittss.png" 
							width="300px"
							style={{borderRadius: "50%", border: imgLoaded ? "solid 2px whitesmoke" : "none"}}
						/>
					</Col>
					<Col style={{textAlign: screens.md ? "left" : "center", verticalAlign: screens.md? "middle" : "top"}}>
						<div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: screens.md ? "left" : "center"}}>
							<div className="styled-text">
								<p style={{fontSize: 30, marginBottom: "5px", fontFamily: "'Raleway-Bold', sans-serif"}}>Hey there! 👋</p>
								<p style={{marginBottom: "15px"}}>I'm <Link to="/about">Henry</Link> <span style={{color: 'gray'}}>(Github - Skittss)</span></p>
								<p style={{marginBottom: "5px"}}>I'm into low-level graphics systems, and the intersection of graphics and art.</p>
								<p style={{marginBottom: "15px"}}>Currently working as a Graphics Research Engineer.</p>
								<p style={{marginBottom: "5px"}}>Check out my projects <Link to="/projects"> here. </Link></p>
								<Divider style={{marginTop: "12px", marginBottom: "12px"}} />
								<div>
									<Row wrap={false}>
										<Col flex={1}>
											<Row wrap={false}>
												<Col>
												<div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: screens.md ? "left" : "center"}}>
													<span style={{fontSize: 40, lineHeight: "10px"}}>🎓</span>
												</div>
												</Col>
												<Col>
													<Row align="middle">
														Graphics Research Engineer
													</Row>
													<Row align="middle">
														<span style={{fontSize: 10, color: 'gray'}}>June 2024 - Present</span>
													</Row>
												</Col>
											</Row>
										</Col>
										<Col flex="none">
											<Divider type="vertical" style={{height: "100%", borderLeftWidth: "2px", marginLeft: "10px", marginRight: "10px"}}/>
										</Col>
										<Col flex={1}>
										<Row style={{height: "100%", display: "flex", alignItems: "center", justifyContent: screens.md ? "left" : "center"}}>
											<Col style={{color: 'orange'}}>Status: &nbsp;</Col>
											<Col style={{background: "rgba(0,0,0,0.5)", borderRadius: "0.4em", padding: "2px 5px 2px 5px", fontFamily: "'Roboto Mono', monospace"}}>&gt; Mapping Shadows 😎<span className="animated-cursor" /></Col>
										</Row>
										</Col>
									</Row>
								</div>
							</div>
						</div>
					</Col>

				</Row>
				</div>
			</FadeIn>
		);
}

export default HomePage
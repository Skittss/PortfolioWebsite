import React from 'react';
import { Image, Row, Col, Grid, Divider } from 'antd'
import { Link } from 'react-router-dom'

import FadeIn from 'react-fade-in';
import "../../css/home.scss";
import { HashLink } from 'react-router-hash-link';
import Seigaiha from '../seigaiha/seigaiha';

const { useBreakpoint } = Grid

const HomePage = () => {
		const screens = useBreakpoint();

		return (
			<FadeIn>
				<Seigaiha />

				<div className='padded-main'>
				<Row gutter={[20, 16]} wrap={!screens.md} justify="center">
					<Col style={{textAlign: screens.md ? "right" : "center"}}>
						<Image
							preview={false} 
							fallback="Github profile picture" 
							src="https://github.com/Skittss.png" 
							width="300px"
							style={{borderRadius: "50%", border: "solid 2px", borderColor: "whitesmoke"}}
						/>
					</Col>
					<Col style={{textAlign: screens.md ? "left" : "center", verticalAlign: screens.md? "middle" : "top"}}>
						<div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: screens.md ? "left" : "center"}}>
							<div className="styled-text">
								<p style={{fontSize: 30, marginBottom: "5px", fontFamily: "'Raleway-Bold', sans-serif"}}>Hey there! 👋</p>
								<p style={{marginBottom: "15px"}}>I'm <Link to="/about">Henry</Link> <span style={{color: 'gray'}}>(Github - Skittss)</span></p>
								<p style={{marginBottom: "5px"}}>I'm into Machine Learning, Computer Vision, and Graphics.</p>
								<p style={{marginBottom: "15px"}}>I also like a little bit of WebDev!</p>
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
														The University of Bath
													</Row>
													<Row align="middle">
														<span style={{fontSize: 10, color: 'gray'}}>BSc (Hons) Computer Science (Year 3)</span>
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
											<Col style={{background: "rgba(0,0,0,0.5)", borderRadius: "0.4em", padding: "2px 5px 2px 5px", fontFamily: "'Roboto Mono', monospace"}}>&gt; Graduated 😎<span className="animated-cursor" /></Col>
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
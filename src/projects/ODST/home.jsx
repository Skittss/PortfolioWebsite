import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image } from 'antd';

import waves from '../../content/projects/FFTOcean/waves.mp4'
import sines from '../../content/projects/FFTOcean/sines.png'
import hkt from '../../content/projects/FFTOcean/hkt.png'
import butterfly from '../../content/projects/FFTOcean/butterfly.png'
import normals from '../../content/projects/FFTOcean/normals.png'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';

const Home = () => {
    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.teaser} projectLink="https://skittss.github.io/FFTOcean/" githubURL="https://github.com/Skittss/FFTOcean">
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <p>
                This project was written for my final year dissertation at The University of Bath. 
                Writing of this section is in progress, and will be delayed until my graduation.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="paper" className="raleway-title">
                Paper
            </h1>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="brief-method" className="raleway-title">
                Brief Method Explanation
            </h1>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="results" className="raleway-title">
                Results
            </h1>
        </ProjectPage>
    );
}

export default Home;

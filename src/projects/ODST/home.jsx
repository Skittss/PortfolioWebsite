import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image } from 'antd';

import transfer_teaser from '../../content/projects/ODST/Arcimboldo_Transfer.png'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';
import AnnotatedImage from '../annotatedImage';

const Home = () => {
    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.teaser}>
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <p>
                This project was written for my final year dissertation at The University of Bath. 
                Writing of this section is in progress, and will be delayed until my graduation. For now, enjoy this teaser 😉
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%"}}>
                <AnnotatedImage width="100%" src={transfer_teaser}/>
            </div>
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

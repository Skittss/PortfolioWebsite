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
            <HomeTemplate title={Meta.title} projectRoute="/main" githubURL="https://github.com/Skittss/PortfolioWebsite/tree/main/src/projects/Tetnet"></HomeTemplate>
            <div className="project-content-wrapper">
                bruh
            </div>
        </FadeIn>
        </>
    )
}

export default Home;
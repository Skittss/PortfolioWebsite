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
    
        <ProjectPage title={Meta.title} thumb={Meta.thumb}>
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <p>
                Car racing with Deep Q. Writing is in progress.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="rl-into" className="raleway-title">
                A Brief intro to RL
            </h1>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="dqn" className="raleway-title">
                Deep Q Learning (DQN)
            </h1>
            <h1 id="ddqn" className="raleway-title">
                Double Deep Q (DDQN)
            </h1>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="preprocessing" className="raleway-title">
                Preprocessing
            </h1>
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="tweaks" className="raleway-title">
                Algorithm Tweaks
            </h1>
            <h2 id="acsp" className="raleway-title">
                Action Space
            </h2>
            <h2 id="frame-stack" className="raleway-title">
                Frame Stacking
            </h2>
            <h2 id="batch-prio" className="raleway-title">
                Priority Batches
            </h2>
            <h2 id="reward-clip" className="raleway-title">
                Reward Clipping
            </h2>
            <h2 id="other-tweak" className="raleway-title">
                Other Tweaks
            </h2>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="results" className="raleway-title">
                Results
            </h1>
        </ProjectPage>
    );
}

export default Home;

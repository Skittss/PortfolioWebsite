import React from 'react';
import FadeIn from 'react-fade-in';
import HomeTemplate from '../homeTemplate';

const Home = () => {
    return (
        <FadeIn>
            <HomeTemplate title="WebGL Canny Edge Detection" projectRoute="/main" githubURL="https://github.com/Skittss/FourierSketcher"></HomeTemplate>
        </FadeIn>
    );
}

export default Home;

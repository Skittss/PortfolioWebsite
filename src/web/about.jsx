import React, { Suspense, useEffect, useState, useRef, useCallback , useMemo} from 'react';
import { Button, Image, Row, Col, Grid, Divider } from 'antd'
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { DoubleSide, Clock, DepthTexture, LinearFilter, RGBFormat, WebGLRenderTarget, NearestFilter, UnsignedShortType } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Link } from 'react-router-dom'

import FadeIn from 'react-fade-in';
import "../css/home.scss";

const { useBreakpoint } = Grid

const AboutPage = () => {

    const [noisePos, setNoisePos] = useState(0)
    const [clock, setClock] = useState(new Clock())
    const screens = useBreakpoint();

    return (
        <FadeIn>
        <div className='padded-main' style={{display: "flex", justifyContent: "center"}}>
            <p style={{margin: "0 auto"}}>
                In construction 😉
            </p>
        </div>
        </FadeIn>
    );
}

export default AboutPage
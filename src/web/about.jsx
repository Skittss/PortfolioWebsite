import React, { Suspense, useEffect, useState, useRef, useCallback , useMemo} from 'react';
import { Button, Image, Row, Col, Grid, Divider } from 'antd'
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { DoubleSide, Clock, DepthTexture, LinearFilter, RGBFormat, WebGLRenderTarget, NearestFilter, UnsignedShortType } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Link } from 'react-router-dom'

import FadeIn from 'react-fade-in';
import "../css/home.scss";
import Seigaiha from './seigaiha/seigaiha';

const { useBreakpoint } = Grid

const AboutPage = () => {


    return (
        <FadeIn>
            <Seigaiha />
            <div className='padded-main' style={{display: "flex", justifyContent: "center"}}>
                <p style={{margin: "0 auto"}}>
                    Under construction 😉
                </p>
            </div>
        </FadeIn>
    );
}

export default AboutPage
import * as THREE from 'three';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import React, { useState, useRef, Suspense, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { Image, Slider, Button, Row, Col, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ImageUploader from "./imageUploader";
import "./main.scss";

import ThreeImagePlane from "./threeImagePlane";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

import { GrayscalePass, HorizontalBlurPass, VerticalBlurPass } from './shaders';

import { getSeparableKernel } from "./gaussianKernel";

extend({ EffectComposer, ShaderPass, RenderPass, GrayscalePass, HorizontalBlurPass, VerticalBlurPass });

const { Option } = Select;

const grayScaleCoefficients = {
    "BT.601" : [0.299, 0.587, 0.114],
    "BT.709" : [0.2126, 0.7152, 0.0722],
    "BT.2100" : [0.2627, 0.6780, 0.0593],
    "Mean" : [0.3333, 0.3333, 0.3333]
}

const Step1 = () => {

    const [step, setStep] = useState(0);

    const ImgContainerRef = useRef();
    const [shaderDisplayDim, setDisplayDim] = useState({width: 0, height: 0});

    const [rawInput, setRawInput] = useState(null);
    const [imgSource, setImgSource] = useState(null);
    const [uploadVisibility, setUploadVisibility] = useState(true);

    const [selectedGrayscaleTag, setSelectedGrayscaleTag] = useState("BT.601")
    const [selectedGrayscaleEncoding, setSelectedGrayscaleEncoding] = useState(grayScaleCoefficients[selectedGrayscaleTag]);

    const _getDisplay = ({reverse = false, value = "block"} = {}) => {
        if (reverse) return uploadVisibility ? "none" : value;
        return uploadVisibility ? value : "none";
    }

    const onImageUpload = data => {
        setImgSource(data.src);
        setRawInput(data.dim);
        setUploadVisibility(false);
    }

    const goBack = () => {
        setImgSource(null);
        setUploadVisibility(true);
    }

    const stepOptions = {
        
        0: (
            <>
                <Select defaultValue={selectedGrayscaleTag} onChange={v => {setSelectedGrayscaleTag(v); setSelectedGrayscaleEncoding(grayScaleCoefficients[v])}}>
                    <Option value="BT.601">BT.601</Option>
                    <Option value="BT.709">BT.709</Option>
                    <Option value="BT.2100">BT.2100</Option>
                    <Option value="Mean">Mean</Option>
                </Select>
            </>
        ),

        1: (
            <>
                <Slider />
                <Slider />
            </>
        ),

        2: (
            <>
            </>
        )
    }

    const getStepShaders = (step) => {

        return (
            <>
                {step >= 0 ? <grayscalePass attachArray="passes" args={[selectedGrayscaleEncoding]} /> : null}
                {step >= 1 ?  
                <>
                    <horizontalBlurPass attachArray="passes" args={[getSeparableKernel(10, 100), getSeparableKernel(10, 100).length, ImgContainerRef.current.offsetWidth]} />
                    <verticalBlurPass attachArray="passes" args={[getSeparableKernel(10, 100), getSeparableKernel(10, 100).length, ImgContainerRef.current.offsetHeight]} />
                </>
                : null}
            </>
        )
    }

    const getOptions = (step) => {

        return (
            <div className="processor-options">
                {stepOptions[step]}
            </div>
        )
    }

    const Shaders = () => {
        const composer = useRef();
        const { scene, gl, size, camera } = useThree();
        useEffect(() => void composer.current.render(), []);
        useFrame(() => composer.current.render(), 1);

        return (
            <effectComposer ref={composer} args={[gl]}>
                <renderPass attachArray="passes" scene={scene} camera={camera} />
                {getStepShaders(step)}


                {/* <glitchPass attachArray="passes" /> */}
                {/* <filmPass attachArray="passes" args={[0.35, 0.025, 648, false]} renderToScreen /> */}
                {/* {getStepShaders(step, scene, gl, size, camera)} */}
            </effectComposer>
        )
    }

    return (

        <div className="fill-container">

            <FadeIn visible={uploadVisibility}>
                <ImageUploader onLoadCallback={onImageUpload} style={{display: _getDisplay()}}/>
            </FadeIn>

            {(imgSource != null && rawInput != null) ? (
                <div className="fill-container">
                    <FadeIn className="fill-and-vertically-center">
                        <Row gutter={[16,16]} justify="center" align="middle" style={{display: "flex", alignItems: "center"}}>
                            <Col className="process-preview-grid-col" flex={1}>
                                <div className="process-preview-container" ><div ref={ImgContainerRef}><Image id="preview-before" src={imgSource} onLoad={() => setDisplayDim({width: ImgContainerRef.current.offsetWidth, height: ImgContainerRef.current.offsetHeight})} /></div></div>
                            </Col>

                            <Col className="process-preview-grid-col" flex={1}>
                                <div className="process-preview-container">
                                    <Canvas 
                                        className="shader"
                                        camera={{fov: 50, position: [0, 0, 30]}}
                                        gl={{preserveDrawingBuffer: true}}
                                        style={{position: "relative", width: shaderDisplayDim.width, height: shaderDisplayDim.height}}
                                    >
                                        {console.log("src", imgSource)}{console.log(rawInput)}
                                        <ThreeImagePlane img={imgSource} dim={{width: rawInput.width, height: rawInput.height}}/>
                                        <Shaders />
                                    </Canvas>
                                </div>
                            </Col>

                            <Col className="process-preview-grid-col" flex={1} style={{alignSelf: "stretch"}}>
                                <div style={{paddingBottom: "10px"}}>
                                    <Button onClick={() => setStep(prev => prev - 1)}>Previous</Button>
                                    <Button onClick={() => setStep(prev => prev + 1)} style={{float: "right"}}>Next</Button>
                                </div>
                                {getOptions(step)}
                            </Col>
                        </Row>
                    </FadeIn>
                    <FadeIn className="back-overlay" visible={!uploadVisibility}>
                        <Button id="button"
                            type="link" 
                            style={{fontSize: "15px"}}
                            onClick={goBack}
                        >
                            <ArrowLeftOutlined /> 
                            Change image
                        </Button> 
                    </FadeIn>

                </div>
            ) : null}
        </div>
    )
}

export {Step1}; 
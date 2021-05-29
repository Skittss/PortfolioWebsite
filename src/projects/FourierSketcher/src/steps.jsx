import * as THREE from 'three';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import React, { useState, useRef, Suspense, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { Image, Slider, Button, Row, Col, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ImageUploader from "./imageUploader";
import "./main.scss";

import ThreeImagePlane from "./threeImagePlane";
import { GrayscaleShader, hGaussianBlur, vGaussianBlur } from "./shaders";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'

import {getTrunc1DKernel} from "./gaussianKernel";

extend({ EffectComposer, ShaderPass, RenderPass, GrayscaleShader, hGaussianBlur, vGaussianBlur});

const { Option } = Select;

const grayScaleCoefficients = {
    "BT.601" : [0.299, 0.587, 0.114],
    "BT.709" : [0.2126, 0.7152, 0.0722],
    "BT.2100" : [0.2627, 0.6780, 0.0593],
    "Mean" : [0.3333, 0.3333, 0.3333]
}

// const ToGray = ({children: t, colorWeights: weights }) => {
//     return <Node shader={shaders.Grayscale} uniforms={ { weights, t } } />
// }

// const ToHorizontalBlur = ({children: t, gaussianKernel: kernel, dimensions: dim}) => {
//     const kernelSize = kernel.length;
//     return <Node shader={shaders.hGaussianBlur} uniforms={ { dim, kernelSize, kernel, t } } />
// }

// const ToVerticalBlur = ({children: t, gaussianKernel: kernel, dimensions: dim}) => {
//     const kernelSize = kernel.length;
//     return <Node shader={shaders.vGaussianBlur} uniforms={ { dim, kernelSize, kernel, t } } />
// }

// const ToEdgeMagnitudes = ({children: t}) => {
//     return <Node shader={shaders.ShowEdgeMagnitudes} uniforms={ { t } }/>
// }

// const ToEdgeFinding = ({children: t, hKernel: GX, vKernel: GY, dimensions: dim}) => {
//     return <Node shader={shaders.EdgeFinding} uniforms={ { dim, GX, GY, t } } />
// }

// const ToNMS = ({children: t, dimensions: dim}) => {
//     return <Node shader={shaders.NMS} uniforms={ { dim, t } } />
// }

const Step1 = () => {

    const ImgContainerRef = useRef();
    const [shaderDisplayDim, setDisplayDim] = useState({width: 0, height: 0});

    const [rawInput, setRawInput] = useState(null);
    const [processedOutput, setProcessedOutput] = useState(null);
    const [imgSource, setImgSource] = useState(null);
    const [uploadVisibility, setUploadVisibility] = useState(true);

    const [selectedGrayscaleEncoding, setSelectedGrayscaleEncoding] = useState(grayScaleCoefficients["BT.601"]);

    const _getDisplay = ({reverse = false, value = "block"} = {}) => {
        if (reverse) return uploadVisibility ? "none" : value;
        return uploadVisibility ? value : "none";
    }

    const onImageUpload = data => {
        setImgSource(data.src);
        setRawInput(data.raw);
        setUploadVisibility(false);
    }

    const goBack = () => {
        setImgSource(null);
        setUploadVisibility(true);
    }

    const getOptions = () => {
        return (
            <div className="processor-options">
                <Select defaultValue="BT.601" onChange={v => setSelectedGrayscaleEncoding(grayScaleCoefficients[v])}>
                    <Option value="BT.601">BT.601</Option>
                    <Option value="BT.709">BT.709</Option>
                    <Option value="BT.2100">BT.2100</Option>
                    <Option value="Mean">Mean</Option>
                </Select>
                <Slider />
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
                {/* <shaderPass attachArray="passes" args={[GrayscaleShader]} material-uniforms-weights-value={selectedGrayscaleEncoding}/> */}
                {/* <shaderPass attachArray="passes" args={[hGaussianBlur]} 
                    material-uniforms-kernel-value={getTrunc1DKernel(3, 1.5)} 
                    material-uniforms-kernelSize-value={() => getTrunc1DKernel(3, 1.5).length}
                    material-uniforms-dim-value={[ImgContainerRef.current.offsetWidth, ImgContainerRef.current.offsetHeight]}
                /> */}
                <shaderPass attachArray="passes" args={[vGaussianBlur]} 
                    material-uniforms-kernel-value={getTrunc1DKernel(3, 1)}
                    material-uniforms-kernelSize-value={() => getTrunc1DKernel(3, 1).length}
                    material-uniforms-dim-value={[ImgContainerRef.current.offsetWidth, ImgContainerRef.current.offsetHeight]}
                />
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
                                    <Canvas className="shader" camera={{fov: 50, position: [0, 0, 30]}} style={{position: "relative", width: shaderDisplayDim.width, height: shaderDisplayDim.height}}>
                                        <Suspense fallback={null}>
                                            <ThreeImagePlane img={imgSource} dim={{width: rawInput.width, height: rawInput.height}}/>
                                        </Suspense>
                                        <Shaders />
                                    </Canvas>
                                </div>
                            </Col>

                            <Col className="process-preview-grid-col" flex={1}>
                                {getOptions()}
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
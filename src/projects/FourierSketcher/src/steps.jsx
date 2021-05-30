import * as THREE from 'three';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import React, { useState, useRef, Suspense, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { Image, Slider, InputNumber, Button, Row, Col, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ImageUploader from "./imageUploader";
import "./main.scss";

import ThreeImagePlane from "./threeImagePlane";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

import { GrayscalePass, HorizontalBlurPass, VerticalBlurPass, SobelPass, GpuComputePass } from './shaders';

import { getSeparableKernel } from "./gaussianKernel";

extend({ EffectComposer, ShaderPass, RenderPass, GrayscalePass, HorizontalBlurPass, VerticalBlurPass, SobelPass, GpuComputePass });

const { Option } = Select;

const grayScaleCoefficients = {
    "BT.601" : [0.299, 0.587, 0.114],
    "BT.709" : [0.2126, 0.7152, 0.0722],
    "BT.2100" : [0.2627, 0.6780, 0.0593],
    "Mean" : [0.3333, 0.3333, 0.3333]
}

const edgefindingOperators = {

    "sobel" : {
        gx: [
            1, 0, -1,
            2, 0, -2,
            1, 0, -1
        ],

        gy: [
            1, 2, 1,
            0, 0, 0,
            -1,-2,-1
        ]
    },

    "prewitt" : {
        gx: [
            1, 0, -1,
            1, 0, -1,
            1, 0, -1
        ],

        gy: [
            1, 1, 1,
            0, 0, 0,
            -1,-1,-1
        ]
    }

}


const Step1 = () => {

    const maxStep = 6;
    const [step, setStep] = useState(0);

    const ImgContainerRef = useRef();
    const [shaderDisplayDim, setDisplayDim] = useState({width: 0, height: 0});

    const [imgDims, setImgDims] = useState(null);
    const [imgSource, setImgSource] = useState(null);

    const [uploadVisibility, setUploadVisibility] = useState(true);


    // Stateful img processing params.
    const [selectedGrayscaleTag, setSelectedGrayscaleTag] = useState("BT.601")
    const [selectedGrayscaleEncoding, setSelectedGrayscaleEncoding] = useState(grayScaleCoefficients[selectedGrayscaleTag]);

    const [gaussRadius, setGaussRadius] = useState(3);
    const [gaussSigma, setGaussSigma] = useState(1);

    const [selectedEdgeTag, setSelectedEdgeTag] = useState("sobel")
    const [selectedEdgeOperator, setSelectedEdgeOperator] = useState(edgefindingOperators[selectedEdgeTag])

    const _getDisplay = ({reverse = false, value = "block"} = {}) => {
        if (reverse) return uploadVisibility ? "none" : value;
        return uploadVisibility ? value : "none";
    }

    const onImageUpload = data => {
        setImgSource(data.src);
        setImgDims(data.dim);
        setUploadVisibility(false);
    }

    const goBack = () => {
        setImgSource(null);
        setUploadVisibility(true);
    }

    const hasNextStep = (step) => {
        return 0 <= step && step < maxStep;
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
                <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                    <Col flex="60px">Radius</Col>
                    <Col flex="auto"><Slider value={gaussRadius} onChange={v => setGaussRadius(v)} min={0} max={20}/></Col>
                    <Col flex="100px" align="right"><InputNumber value={gaussRadius} onChange={v => setGaussRadius(v) } min={0} max={20}/></Col>
                </Row>
                
                <Row style={{display: "flex", alignItems: "center"}}>
                    <Col flex="60px">Sigma (σ)</Col>
                    <Col flex="auto"><Slider defaultValue={gaussSigma} onChange={v => setGaussSigma(v)} min={0.01} max={15} step={0.01}/></Col>
                    <Col flex="100px" align="right"><InputNumber value={gaussSigma} onChange={v => setGaussSigma(v) } min={0} max={20} step={0.01}/></Col>
                </Row>
            </>
        ),

        2: (
            <>
                <Select defaultValue={selectedEdgeTag} onChange={v => {setSelectedEdgeTag(v); setSelectedEdgeOperator(edgefindingOperators[v])}}>
                    <Option value="sobel">Sobel</Option>
                    <Option value="prewitt">Prewitt</Option>
                </Select>
            </>
        )
    }

    const getStepShaders = (step, gl) => {

        // Do a bit of pre-processing for gaussian kernel.
        let kernel;
        let kernelSize;
        if (step >= 1) {
            kernel = getSeparableKernel(gaussRadius, gaussSigma);
            kernelSize = kernel.length;
        }

        return (
            <>
                {step >= 0 ? <grayscalePass attachArray="passes" args={[selectedGrayscaleEncoding]} /> : null}
                {step >= 1 ?  
                <>
                    <horizontalBlurPass attachArray="passes" args={[kernel, kernelSize, ImgContainerRef.current.offsetWidth]} />
                    <verticalBlurPass attachArray="passes" args={[kernel, kernelSize, ImgContainerRef.current.offsetHeight]} />
                </>
                : null}
                {step >= 2 ? <gpuComputePass attachArray="passes" args={[selectedEdgeOperator.gx, selectedEdgeOperator.gy, [ImgContainerRef.current.offsetWidth, ImgContainerRef.current.offsetHeight], gl]} /> : null}
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
                {getStepShaders(step, gl)}
            </effectComposer>
        )
    }

    return (

        <div className="fill-container">

            <FadeIn visible={uploadVisibility}>
                <ImageUploader onLoadCallback={onImageUpload} style={{display: _getDisplay()}}/>
            </FadeIn>

            {(imgSource != null && imgDims != null) ? (
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
                                        <ThreeImagePlane img={imgSource} dim={{width: imgDims.width, height: imgDims.height}}/>
                                        <Shaders />
                                    </Canvas>
                                </div>
                            </Col>

                            <Col className="process-preview-grid-col" flex={1} style={{alignSelf: "stretch"}}>
                                <div style={{paddingBottom: "10px"}}>
                                    <Button onClick={() => setStep(prev => prev - 1)} disabled={!hasNextStep(step - 1)}>Previous</Button>
                                    <Button onClick={() => setStep(prev => prev + 1)} disabled={!hasNextStep(step + 1)} style={{float: "right"}}>Next</Button>
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
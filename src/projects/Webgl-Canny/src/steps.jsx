import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import React, { useState, useRef, Suspense, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { Image, Slider, InputNumber, Button, Row, Col, Select, Spin } from 'antd';
import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
import ImageUploader from "./imageUploader";
import "./main.scss";

import ThreeImagePlane from "./threeImagePlane";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

import { GrayscalePass, HorizontalBlurPass, VerticalBlurPass, SobelPass, GpuComputePass, HysteresisPass, CopyStrongPass } from './shaders';

import { getSeparableKernel } from "./gaussianKernel";

import getComputationRenderers from "./shaders/getComputationRenderers";
import { WebGLRenderTarget } from 'three';

extend({ EffectComposer, RenderPass, GrayscalePass, HorizontalBlurPass, VerticalBlurPass, SobelPass, GpuComputePass, HysteresisPass, CopyStrongPass });

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

    const maxStep = 7;
    const [step, setStep] = useState(0);

    const ImgContainerRef = useRef();
    const [shaderDisplayDim, setDisplayDim] = useState({width: 0, height: 0});

    const [imgDims, setImgDims] = useState(null);
    const [imgSource, setImgSourceVar] = useState(null);

    const [uploadVisibility, setUploadVisibility] = useState(true);

    const [intermediateRT, setIntermediateRT] = useState(null);


    // Stateful img processing params.
    const [selectedGrayscaleTag, setSelectedGrayscaleTag] = useState("BT.601")
    const [selectedGrayscaleEncoding, setSelectedGrayscaleEncoding] = useState(grayScaleCoefficients[selectedGrayscaleTag]);

    const [gaussRadius, setGaussRadius] = useState(3);
    const [gaussSigma, setGaussSigma] = useState(1);

    const [selectedEdgeTag, setSelectedEdgeTag] = useState("sobel")
    const [selectedEdgeOperator, setSelectedEdgeOperator] = useState(edgefindingOperators[selectedEdgeTag])

    const [lowThreshold, setLowThreshold] = useState(0.3);
    const [highThreshold, setHighThreshold] = useState(0.3);

    const [hysteresisTolerance, setTolerance] = useState(1);
    const [hysteresisIters, setHysteresisIters] = useState(1);

    // Memoization
    const [memoRenderers, setMemoRenderers] = useState(null);
    const [memoRendererParams, setMemoRendererParams] = useState(null);

    const [memoGaussParams, setMemoGaussParams] = useState(null);
    const [memoGauss, setMemoGauss] = useState(null);

    // Render reference for saving image.
    const [rendererRef, setRendererRef] = useState(null);
    const [savingState, setSavingState] = useState(false);

    const _getDisplay = ({reverse = false, value = "block"} = {}) => {
        if (reverse) return uploadVisibility ? "none" : value;
        return uploadVisibility ? value : "none";
    }

    const setImgSource = (v) => {
        if (imgSource) URL.revokeObjectURL(imgSource);
        setImgSourceVar(v);
    }

    const onImageUpload = data => {
        setImgSource(data.src);
        setImgDims(data.dim);
        setUploadVisibility(false);
    }

    const goBack = () => {
        setImgSource(null);
        setImgDims(null);
        setUploadVisibility(true);
    }

    const hasNextStep = (step) => {
        return 0 <= step && step < maxStep;
    }

    const stepTitles = {
        0: "Grayscale Encoding",
        1: "Gaussian Blur",
        2: "Edgefinding Operation",
        3: "Non-maximum suppression",
        4: "Double Threshold",
        5: "Edge-Tracking (Hysteresis)",
        6: "Final Image"
    }

    const stepOptions = {
        
        0: (
            <>
                <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                    <Col flex="120px">Encoding Type</Col>
                    <Col flex="auto">
                        <Select defaultValue={selectedGrayscaleTag} onChange={v => {setSelectedGrayscaleTag(v); setSelectedGrayscaleEncoding(grayScaleCoefficients[v])}}>
                            <Option value="BT.601">BT.601</Option>
                            <Option value="BT.709">BT.709</Option>
                            <Option value="BT.2100">BT.2100</Option>
                            <Option value="Mean">Mean</Option>
                        </Select>
                    </Col>
                </Row>
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
                <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                    <Col flex="70px">Operator</Col>
                    <Col flex="auto">
                        <Select defaultValue={selectedEdgeTag} onChange={v => {setSelectedEdgeTag(v); setSelectedEdgeOperator(edgefindingOperators[v])}}>
                            <Option value="sobel">Sobel</Option>
                            <Option value="prewitt">Prewitt</Option>
                        </Select>
                    </Col>
                </Row>
            </>
        ),

        3: (<p><i>(No options available)</i></p>),

        4: (
            <>
                <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                    <Col flex="60px">High</Col>
                    <Col flex="auto"><Slider value={highThreshold} onChange={v => setHighThreshold(v)} min={0} max={1} step={0.01}/></Col>
                    <Col flex="100px" align="right"><InputNumber value={highThreshold} onChange={v => setHighThreshold(v) } min={0} max={1} step={0.01}/></Col>
                </Row>
                
                <Row style={{display: "flex", alignItems: "center"}}>
                    <Col flex="60px">Low</Col>
                    <Col flex="auto"><Slider value={lowThreshold} onChange={v => setLowThreshold(v)} min={0} max={1} step={0.01}/></Col>
                    <Col flex="100px" align="right"><InputNumber value={lowThreshold} onChange={v => setLowThreshold(v) } min={0} max={1} step={0.01}/></Col>

                </Row>
            </>
        ),

        5: (
            <>
                <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                    <Col flex="100px">Tolerance (px)</Col>
                    <Col flex="auto"><Slider value={hysteresisTolerance} onChange={v => setTolerance(v)} min={0} max={5}/></Col>
                    <Col flex="100px" align="right"><InputNumber value={hysteresisTolerance} onChange={v => setTolerance(v) } min={0} max={5}/></Col>
                </Row>

                <Row style={{display: "flex", alignItems: "center"}}>
                    <Col flex="100px">Iterations</Col>
                    <Col flex="auto"><Slider value={hysteresisIters} onChange={v => setHysteresisIters(v)} min={0} max={500}/></Col>
                    <Col flex="100px" align="right"><InputNumber value={hysteresisIters} onChange={v => setHysteresisIters(v) } min={0} max={500}/></Col>
                </Row>
            </>
        )
    }

    const downloadCanvas = async () => {
        if (rendererRef) {

            setSavingState(true);

            new Promise(resolve => {

                setTimeout(() => {

                    let img = rendererRef.domElement.toDataURL();
                    resolve(img);
                    
                }, 30);

            }).then(img => {

                let link = document.createElement("a");
                link.download = "Canny_Step_" + step;
                link.href = img;
                link.click();
                setSavingState(false);
            })

        }
    }

    const disposeRenderers = currentRenderers => {

        //console.log(currentRenderers)
        if (currentRenderers) {
            if (currentRenderers.sobel) {
                for (const [k, v] of Object.entries(currentRenderers.sobel)) {
                    //console.log("disposed of :", k);
                    if (v) {
                        if (v.dispose) v.dispose();
                        delete currentRenderers.sobel[k];
                    };
                }
                currentRenderers.sobel = null;
            }

            if (currentRenderers.nms) {
                for (const [k, v] of Object.entries(currentRenderers.nms)) {
                    //console.log("disposed of :", k);
                    if (v) {
                        if (v.dispose) v.dispose();
                        delete currentRenderers.nms[k];
                    };
                }
                currentRenderers.nms = null;
            }
        }


    }

    const GetStepShaders = (step, gl) => {

        // Do manual memoization here of kernel and renderers as useMemo does not have expected performance.

        let currentKernel = memoGauss;
        let gaussParams = {r: gaussRadius, s: gaussSigma}
        if (memoGaussParams == null) {
            setMemoGaussParams(gaussParams);

            currentKernel = getSeparableKernel(gaussParams.r, gaussParams.s);
            setMemoGauss(currentKernel);
        }

        else if (gaussParams.r != memoGaussParams.r || gaussParams.s != memoGaussParams.s) {

            setMemoGaussParams(gaussParams);

            currentKernel = getSeparableKernel(gaussParams.r, gaussParams.s);
            setMemoGauss(currentKernel);

        }

        const kernel = currentKernel;
        const kernelSize = kernel.length;

        // Memo renderers
        let currentRenderers = memoRenderers;
        let renderParams = {gl: gl, dims: [ImgContainerRef.current.offsetWidth, ImgContainerRef.current.offsetHeight], kernel: selectedEdgeOperator, doNMS: (step > 2)}

        if (memoRendererParams == null) {
            setMemoRendererParams(renderParams);

            currentRenderers = getComputationRenderers(renderParams.gl, renderParams.dims, renderParams.kernel, renderParams.doNMS);
            setMemoRenderers(currentRenderers)
            
        }

        if (intermediateRT == null) {
            setIntermediateRT({tg: new WebGLRenderTarget(renderParams.dims.x, renderParams.dims.y)});
        }
        
        else if (renderParams.gl != memoRendererParams.gl 
            || renderParams.dims[0] != memoRendererParams.dims[0]
            || renderParams.dims[1] != memoRendererParams.dims[1]
            || renderParams.kernel != memoRendererParams.kernel
            || renderParams.doNMS != memoRendererParams.doNMS) {

                setMemoRendererParams(renderParams);

                // Before updating the renderers ref, dispose of ALL objects from the custom renderer to avoid HUGE memory leaks (R3F doesn't auto-dispose these ;-;)
                disposeRenderers(currentRenderers);

                currentRenderers = getComputationRenderers(renderParams.gl, renderParams.dims, renderParams.kernel, renderParams.doNMS);
                setMemoRenderers(currentRenderers)

                if (renderParams.dims[0] != memoRendererParams.dims[0] || renderParams.dims[1] != memoRendererParams.dims[1]) {

                    if (intermediateRT.tg) {
                        if (intermediateRT.tg.dispose) intermediateRT.tg.dispose();
                        delete intermediateRT.tg;
                    }
                    
                    setIntermediateRT({tg: new WebGLRenderTarget(renderParams.dims.x, renderParams.dims.y)});
                }
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
                {step == 2 ? <gpuComputePass attachArray="passes" args={[currentRenderers.sobel, currentRenderers.nms, renderParams.dims, false, null]} /> : null}
                {step == 3 ? <gpuComputePass attachArray="passes" args={[currentRenderers.sobel, currentRenderers.nms, renderParams.dims, true, null]} /> : null}
                {step >= 4 ? <gpuComputePass attachArray="passes" args={[currentRenderers.sobel, currentRenderers.nms, renderParams.dims, true, {high: highThreshold, low: lowThreshold}]} /> : null}
                {step >= 5 ? <hysteresisPass attachArray="passes" args={[hysteresisTolerance, hysteresisIters, intermediateRT.tg, renderParams.dims]}/> : null}
                {step >= 6 ? <copyStrongPass attachArray="passes" args={[renderParams.dims]}/> : null}
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

        if (gl != rendererRef) {
            setRendererRef(gl);
        }

        useEffect(() => void composer.current.render(), []);
        useFrame(() => composer.current.render(), 1);

        return (
            <effectComposer ref={composer} args={[gl]}>
                <renderPass attachArray="passes" scene={scene} camera={camera} />
                {GetStepShaders(step, gl)}
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
                                        <Suspense fallback="Loading...">
                                            <ThreeImagePlane img={imgSource} dim={{width: imgDims.width, height: imgDims.height}}/>
                                        </Suspense>
                                        <Shaders />
                                    </Canvas>
                                </div>
                            </Col>

                            <Col className="process-preview-grid-col" flex={1} style={{alignSelf: "stretch"}}>
                                <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                                    <Col ><Button onClick={() => setStep(prev => prev - 1)} disabled={!hasNextStep(step - 1)}>Previous</Button></Col>
                                    <Col flex="auto" align="center"><h1 id="title" style={{display: "inline-block", alignSelf: "center"}}><b>{stepTitles[step]}</b></h1></Col>
                                    <Col align="right" style={{paddingRight: "5px"}}><Button onClick={() => setStep(prev => prev + 1)} disabled={!hasNextStep(step + 1)} style={{float: "right"}}>Next</Button></Col>
                                    <Col align="right"><Button type="primary" onClick={downloadCanvas} style={{float: "right"}}>{savingState ? <Spin size="middle" indicator={<LoadingOutlined spin style={{color: "white"}}/>}/> : "Save"}</Button></Col>
                                </Row>
                                {getOptions(step)}
                            </Col>
                        </Row>
                    </FadeIn>
                    <FadeIn className="back-overlay" visible={!uploadVisibility}>
                        <Button id="button"
                            type="link" 
                            style={{fontSize: "15px"}}
                            onClick={() => {disposeRenderers(memoRenderers); goBack()}}
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
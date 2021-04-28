import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Image, Slider, Button, Row, Col, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ImageUploader from "./imageUploader";
import "./main.scss";

import shaders from "./shaders";
import { Node } from 'gl-react';
import { Surface } from 'gl-react-dom';

import {getTrunc1DKernel} from "./gaussianKernel";

const { Option } = Select;

const grayScaleCoefficients = {
    "BT.601" : [0.299, 0.587, 0.114],
    "BT.709" : [0.2126, 0.7152, 0.0722],
    "BT.2100" : [0.2627, 0.6780, 0.0593],
    "Mean" : [0.3333, 0.3333, 0.3333]
}

const ToGray = ({children: t, colorWeights: weights }) => {
    return <Node shader={shaders.Grayscale} uniforms={ { weights, t } } />
}

const ToHorizontalBlur = ({children: t, gaussianKernel: kernel, dimensions: dim}) => {
    const kernelSize = kernel.length;
    return <Node shader={shaders.hGaussianBlur} uniforms={ { dim, kernelSize, kernel, t } } />
}

const ToVerticalBlur = ({children: t, gaussianKernel: kernel, dimensions: dim}) => {
    const kernelSize = kernel.length;
    return <Node shader={shaders.vGaussianBlur} uniforms={ { dim, kernelSize, kernel, t } } />
}

const ToEdgeMagnitudes = ({children: t}) => {
    return <Node shader={shaders.ShowEdgeMagnitudes} uniforms={ { t } }/>
}

const ToEdgeFinding = ({children: t, hKernel: GX, vKernel: GY, dimensions: dim}) => {
    return <Node shader={shaders.EdgeFinding} uniforms={ { dim, GX, GY, t } } />
}

const ToNMS = ({children: t, dimensions: dim}) => {
    return <Node shader={shaders.NMS} uniforms={ { dim, t } } />
}

const Step1 = () => {

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
        console.log(data.raw);
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

    return (
        <div className="fill-container">

            <FadeIn visible={uploadVisibility}>
                <ImageUploader onLoadCallback={onImageUpload} style={{display: _getDisplay()}}/>
            </FadeIn>

            {(imgSource !== null && rawInput !== null) ? (
                <div className="fill-container">
                    <FadeIn className="fill-and-vertically-center">
                        <Row gutter={[16,16]} justify="center" align="middle" style={{display: "flex", alignItems: "center"}}>
                            <Col className="process-preview-grid-col" flex={1}>
                                <div className="process-preview-container" ><Image id="preview-before" src={imgSource} /></div>
                            </Col>

                            <Col className="process-preview-grid-col" flex={1}>
                                <div className="process-preview-container"><Image id="preview-after" src={imgSource} /></div>                      
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

                    <Surface width={rawInput.width} height={rawInput.height}>
                        {/* <ToEdgeMagnitudes> */}
                            <ToNMS dimensions={[rawInput.width, rawInput.height]}>
                                <ToEdgeFinding 
                                    dimensions={[rawInput.width, rawInput.height]}
                                    hKernel={[
                                        1, 0, -1,
                                        2, 0, -2,
                                        1, 0, -1
                                    ]}

                                    vKernel={[
                                        1, 2, 1,
                                        0, 0, 0,
                                        -1,-2,-1
                                    ]}
                                >
                                    <ToVerticalBlur gaussianKernel={getTrunc1DKernel(3, 1.5)} dimensions={[rawInput.width, rawInput.height]}>                        
                                        <ToHorizontalBlur gaussianKernel={getTrunc1DKernel(3, 1.5)} dimensions={[rawInput.width, rawInput.height]}>
                                            <ToGray colorWeights={selectedGrayscaleEncoding}>
                                                {imgSource}
                                            </ToGray>
                                        </ToHorizontalBlur>
                                    </ToVerticalBlur>
                                </ToEdgeFinding>
                            </ToNMS>
                        {/* </ToEdgeMagnitudes> */}
                    </Surface>
                </div>
            ) : null}
        </div>
    )
}

export {Step1}; 
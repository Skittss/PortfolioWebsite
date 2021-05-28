import React, { useRef, useState, useMemo } from 'react';
import { TextureLoader } from 'three';
import { useLoader, useThree } from 'react-three-fiber';

import test from "../../../content/projects/FourierSketcher/img/back.jpg"

const useAspect = (width, height, factor = 1) => {
    const { viewport: v, aspect } = useThree();
    const adaptedHeight = height * (aspect > width / height ? v.width / width : v.height / height);
    const adaptedWidth = width * (aspect > width / height ? v.width / width : v.height / height);
    return [adaptedWidth * factor, adaptedHeight * factor, 1];
}

const EdgeDetector = ({img, dim}) => {

    const image = useLoader(TextureLoader, img);
    const [width, height] = useAspect(dim.width, dim.height);

    return (
        <mesh scale={[width, height, 1]}>
            <planeBufferGeometry attach="geometry"/>
            <meshBasicMaterial attach="material" map={image} depthTest={false} toneMapped={false}/>
        </mesh>
    )
}

export default EdgeDetector;
import React from 'react';
import { TextureLoader, LinearFilter } from 'three';
import { useLoader, useThree } from '@react-three/fiber';

// Custom Three.js component - Image projected onto plane which fills the entirety of the viewport.

// Calculates necessary width/height to be projected fully (factor = 1) onto threejs camera.
const useAspect = (width, height, factor = 1) => {
    const { viewport: v, aspect } = useThree();
    const adaptedHeight = height * (aspect > width / height ? v.width / width : v.height / height);
    const adaptedWidth = width * (aspect > width / height ? v.width / width : v.height / height);
    return [adaptedWidth * factor, adaptedHeight * factor, 1];
}

const ThreeImagePlane = ({img, dim}) => {

    const image = useLoader(TextureLoader, img);
    // Use a linear filter to avoid sharp edges in the preview from the camera.
    image.minFilter = LinearFilter;


    const [width, height] = useAspect(dim.width, dim.height);

    return (
        <mesh scale={[width, height, 1]}>
            <planeGeometry attach="geometry"/>
            <meshBasicMaterial attach="material" map={image} depthTest={false} toneMapped={false}/>
        </mesh>
    )
}

export default ThreeImagePlane;
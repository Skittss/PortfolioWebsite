import React, { Suspense, useEffect, useState, useRef, useCallback , useMemo} from 'react';
import { Button } from 'antd'
import logo from '../logo.svg';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { DoubleSide, Clock } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { fragmentShader, vertexShader } from './bumpShader';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const Terrain = ({noisePos, clock, callback}) => {

  const uniforms = useMemo(() => ({
    noisePos: { value: 0.0 },
    bumpScale: { value: 100 },
    zoom: { value: 2 }
  }), [])

  // const material = museRef()
  // if (material.current) aterial.current.uniforms.noisePos.value = noisePos;

  useFrame(state => {
    let speed = 0.5
    let delta = clock.getDelta()
    uniforms.noisePos.value = noisePos + speed * delta
    callback(previous => previous + speed * delta);
    
  })

  return (
    <mesh 
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1 / 256, 1 / 256, 1 / 256]}
    >
      <planeBufferGeometry attach="geometry" args={[1024, 1024, 1024, 1024]}/>
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
      />
      <planeBufferGeometry attach="geometry" args={[1024, 1024, 1024, 1024]}/>
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
      />
    </mesh>
  )

}

const HomePage = () => {

    const [noisePos, setNoisePos] = useState(0)
    const [clock, setClock] = useState(new Clock())

    return (
      <> 
        <Canvas
          camera={{position: [0, 0, 2], fov: 70}}
          style={{position: "absolute", top: 0, left: 0, height: "100vh", width: "100vw"}}
        >
          <Suspense>
            <color attach="background" args={['#000']} />
            <group>
              <Terrain noisePos={noisePos} clock={clock} callback={setNoisePos}/>
            </group>
            <ambientLight />
          </Suspense>
          <PerspectiveCamera
            position={[0.5, 0.5, 0.5]}
            near={0.01}
            far={1000}
            makeDefault
          />
          <OrbitControls screenSpacePanning={false} />
        </Canvas>
        <p style={{position: "absolute", color: "white"}}>Nothing here for now. See projects tab</p>
      </>
    );
}

export default HomePage
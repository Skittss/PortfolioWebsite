import React, { Suspense, useEffect, useState, useRef, useCallback , useMemo} from 'react';
import { Button, Image, Row, Col, Grid, Divider } from 'antd'
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { DoubleSide, Clock, DepthTexture, LinearFilter, RGBFormat, WebGLRenderTarget, NearestFilter, UnsignedShortType } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Link } from 'react-router-dom'
import { fragmentShader, vertexShader } from './bumpShader';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { copyShader } from "./shaders/copyPass";

import FadeIn from 'react-fade-in';
import "../../css/home.scss";
import { HashLink } from 'react-router-hash-link';

const { useBreakpoint } = Grid
extend({ EffectComposer, ShaderPass, RenderPass });

const Water = () => {

  const composer = useRef();
  const ref = useRef()
  const { gl, size, scene, camera } = useThree();

  const [ target ] = useMemo(() =>  {
    const target = new WebGLRenderTarget(
        window.innerWidth,
        window.innerHeight,
        {
            minFilter: NearestFilter,
            magFilter: NearestFilter,
            format: RGBFormat,
            generateMipmaps: false,
            stencilBuffer: false,
            depthBuffer: true,
            depthTexture: new DepthTexture(),
            type: UnsignedShortType
        }
    );
    return [ target ];
  }, []);

  useEffect(() => {
      composer.current.setSize(size.width, size.height)
  }, [size])

  useFrame((state) => {

    state.gl.setRenderTarget(target);
    state.gl.render(scene, camera);

    if (ref.current) {
      ref.current.uniforms['tDiffuse'].value = target.depthTexture;
      ref.current.uniforms['cameraNear'].value = camera.near;
      ref.current.uniforms['cameraFar'].value = camera.far;
    }
    composer.current.render()
  }, 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <shaderPass attachArray="passes" ref={ref} args={[copyShader]} renderToScreen />
    </effectComposer>
  )
}

const Terrain = ({noisePos, clock, callback}) => {

  const uniforms = useMemo(() => ({
    noisePos: { value: 0.0 },
    bumpScale: { value: 100 },
    zoom: { value: 4 },
    opacity: { value: 0.0 }
  }), [])


  // const material = museRef()
  // if (material.current) aterial.current.uniforms.noisePos.value = noisePos;

  useFrame(state => {

    let speed = 0.5
    let threshold = 1.5
    let delta = clock.getDelta()
    uniforms.noisePos.value = noisePos + speed * delta
    uniforms.opacity.value = Math.min(1, noisePos / threshold)
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
      {/* <planeBufferGeometry attach="geometry" args={[1024, 1024, 1024, 1024]}/>
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
      /> */}
    </mesh>
  )

}

const HomePage = () => {

    const [noisePos, setNoisePos] = useState(0)
    const [clock, setClock] = useState(new Clock())
    const screens = useBreakpoint();

    return (
      // <div className="fill-content"> 
      //   <div style={{position: "absolute", top: 0, left: 0, height: "100vh", width: "100vw", backgroundColor: "black"}}/>
      //   <Canvas
      //     style={{position: "absolute", top: 0, left: 0, height: "100vh", width: "100vw"}}
      //   >
      //     <PerspectiveCamera
      //       position={[0.05896666849764306, 1.0630507657317696, 0.9790701530639065]}
      //       rotation={[-0.8264992153403403, 0.040778606785100945, 0.04423528266176858]}
      //       near={0.01}
      //       far={1000}
      //       makeDefault
      //     />
      //     {/* <OrbitControls screenSpacePanning={false} /> */}
      //     <color attach="background" args={['#000']} />
      //     <Suspense fallback>
            
      //       <Terrain noisePos={noisePos} clock={clock} callback={setNoisePos}/>
      //       <ambientLight />
      //     </Suspense>

      //     {/* <Water /> */}

      //   </Canvas>
        <FadeIn>
        <div className='padded-main'>
        <Row gutter={[20, 16]}>
          <Col xs={24} md={12} style={{textAlign: screens.md ? "right" : "center"}}>
            <Image
              preview={false} 
              fallback="Github profile picture" 
              src="https://github.com/Skittss.png" 
              width="300px"
              style={{borderRadius: "50%", border: "solid 2px", borderColor: "whitesmoke"}}
            />
          </Col>
          <Col xs={24} md={12} style={{textAlign: screens.md ? "left" : "center", verticalAlign: screens.md? "middle" : "top"}}>
            <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: screens.md ? "left" : "center"}}>
              <div>
                <p style={{fontSize: 30, marginBottom: "5px", fontFamily: "'Raleway-Bold', sans-serif"}}>Hey there! 👋</p>
                <p style={{marginBottom: "15px"}}>I'm Henry <span style={{color: 'gray'}}>(Github - Skittss)</span></p>
                <p style={{marginBottom: "5px"}}>I'm into Machine Learning, Computer Vision, and Graphics.</p>
                <p style={{marginBottom: "15px"}}>I also like a little bit of WebDev!</p>
                <p style={{marginBottom: "5px"}}>Check out my projects <Link to="/projects"> here. </Link></p>
                <Divider style={{marginTop: "12px", marginBottom: "12px"}} />
                <div>
                  <Row wrap={false}>
                    <Col flex={1}>
                      <Row>
                        <Col>
                        <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: screens.md ? "left" : "center"}}>
                          <span style={{fontSize: 40, lineHeight: "10px"}}>🎓</span>
                        </div>
                        </Col>
                        <Col>
                          <Row align="middle">
                            The University of Bath
                          </Row>
                          <Row align="middle">
                            <span style={{fontSize: 10, color: 'gray'}}>BSc Computer Science (Year 3)</span>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col flex="none">
                      <Divider type="vertical" style={{height: "100%", borderLeftWidth: "2px", marginLeft: "10px", marginRight: "10px"}}/>
                    </Col>
                    <Col flex={1}>
                    <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: screens.md ? "left" : "center"}}>
                    <span style={{color: 'orange'}}>Status: &nbsp;</span>
                    <span style={{background: "rgba(0,0,0,0.5)", borderRadius: "0.4em", padding: "2px 5px 2px 5px", fontFamily: "'Roboto Mono', monospace"}}>&gt; Graduating 😎<span className="animated-cursor" /></span>
                    </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>

        </Row>

        {/* <div className="title-card center-vertically" style={{position: "relative", color: "white", margin: "2em 1em"}}>
          <p style={{fontSize: "2vw", margin: "0 2em", padding: "0 20px", background: "rgba(0,0,0,0.75)"}}>
            <span style={{color: "#569cd6"}}>const</span> <span style={{color: "#fcfc9f"}}>Info</span> = () <span style={{color: "#569cd6"}}>{"=>"}</span> {"{"}<span style={{color: "#ce9178"}}>{"\""}</span>
            <div style={{margin: "0 2em", color: "#ce9178"}}>
                <br />
                <span style={{color: "#ce9178"}}>I'm Henry, a computer science student studying at the University of Bath.</span>
                <br />
                I'm particularly interested in machine learning, computer vision, and graphics.
                <br /><br />
                You can find my projects <a href="https://skittss.github.io/PortfolioWebsite/#/projects">here</a>.
                <br /><br />
            </div>
            <span style={{color: "#ce9178"}}>{"\""}</span>{"};"}<span className="animated-cursor" />
          </p>
        </div> */}
        </div>
        </FadeIn>
      // </div>
    );
}

export default HomePage
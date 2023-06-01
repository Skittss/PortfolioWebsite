import React, { useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Clock } from 'three';

import { SeigaihaFragment, SeigaihaVertex } from './seigaihaShader';


const FragShaderPlane = ({time, clock, time_callback, scale_callback}) => {
	const size = document.getElementById("shader-canvas");
	const dim = [size.offsetWidth, size.offsetHeight];
	const height = size ? size.offsetHeight : 0;

	// Scale off of height only.
	let scale = height;

	const uniforms = useMemo(() => ({
		time: { value: 0.0 }, 
		scale: { value: 0.0 }
	}), []);

	useFrame(state => {
		let speed = 0.35;
		let delta = clock.getDelta();
		uniforms.time.value = time + speed * delta;
		uniforms.scale.value = scale;
		time_callback(previous => previous + speed * delta);
		scale_callback(scale);
	})

	return (
	<mesh scale={[...dim, 1]}>
		<planeBufferGeometry attach="geometry" />
		<shaderMaterial 
		attach="material" 
		uniforms={uniforms}
		vertexShader={SeigaihaVertex}
		fragmentShader={SeigaihaFragment} 
		/>
	</mesh>
	)
}

const Seigaiha = () => {

	const [clock, setClock] = useState(new Clock())
	const [time, setTime] = useState(0);
	const [scale, setScale] = useState(null);

	return (
		<div className="fill-content"> 
			<Canvas
				id="shader-canvas"
				camera={{fov: 50, position: [0, 0, 30]}}
				gl={{preserveDrawingBuffer: true}}
				style={{position: "fixed", top: 0, left: 0, height: "100%", width: "100%"}}
			>
				<FragShaderPlane time={time} clock={clock} time_callback={setTime} scale={scale} scale_callback={setScale} />
			</Canvas>
		</div>
	);
}

export default Seigaiha
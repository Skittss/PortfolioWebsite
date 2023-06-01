import { useMemo } from "react"
import { DepthTexture, LinearFilter, RGBFormat, WebGLRenderTarget } from "three"

const DepthPass = () => {

    const composer = useRef();
    const ref = useRef()
    const { gl, size, scene, camera } = useThree();

    const [ target ] = useMemo(() =>  {
        const target = new WebGLRenderTarget(
            window.innerWidth,
            window.innerHeight,
            {
                minFilter: LinearFilter,
                magFilter: LinearFilter,
                format: RGBFormat,
                stencilBuffer: false,
                depthBuffer: true,
                depthTexture: new DepthTexture()
            }
        );
        return [ target ];
    }, []);

    useEffect(() => {
        composer.current.setSize(size.width, size.height)
      }, [size])
    
    

}
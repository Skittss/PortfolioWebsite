import React from 'react'

const AnnotatedVideo = ({annotation, fontSize, ...props}) => {

    const paddingBottom = props.paddingBottom ? props.paddingBottom : "20px"

    return (
        
        <div style={{position: "relative"}}>
            <video {...props}>
                <source src={props.src} type='video/webm' />
            </video>
            {annotation ? (
                <div className="styled-text" style={{
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    backgroundColor: 'rgba(21, 25, 31, 0.65)',
                    width: "100%", 
                    fontSize: fontSize && fontSize,
                    textAlign: 'center',
                    padding: "10px 5px",
                    paddingBottom: paddingBottom
                }}>
                    {annotation}
                </div>
            ) : null}
        </div>
    );
}

export default AnnotatedVideo;
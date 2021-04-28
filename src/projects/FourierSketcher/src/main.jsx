import React, { useState } from 'react'
import FadeIn from 'react-fade-in';
import { Image, notification, Steps } from 'antd';
import { UploadOutlined, RightCircleOutlined, WarningTwoTone } from '@ant-design/icons';
import { Step1 } from './steps';
import "./main.scss";
const { Step } = Steps;


const Main = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [notifSent, setNotifSent] = useState(false);

    const s = [
        {
            title: "Upload Source & Grayscale",
            description: null,
            icon: <UploadOutlined/>,
            content: Step1
        },

        {
            title: "Gaussian Blur",
            description: null,
            icon: <RightCircleOutlined/>,
            content: null
        },

        {
            title: "Sobel Filter",
            description: "(Image gradient calculation)",
            icon: <RightCircleOutlined/>,
            content: null
        },

        {
            title: "Non-maximum Suppression",
            description: "(Edge thinning)",
            icon: <RightCircleOutlined/>,
            content: null
        },

        {
            title: "Double Thresholding",
            description: null,
            icon: <RightCircleOutlined/>,
            content: null
        },

        {
            title: "Edge Tracking",
            description: "(via hysteresis)",
            icon: <RightCircleOutlined/>,
            content: null
        }
    ]

    const performanceNotification = () => {
        if (notifSent === false) {
            notification.open({
                message: "This project works best on a powerful machine!",
                description: <span>A desktop PC is highly recommended. <br />This project makes use of WebGL - a dedicated GPU will speed up processing.</span>,
                icon: <WarningTwoTone twoToneColor="#FFA500" />,
                key: "performance-notif",
                style: {width: 500}
            });
            setNotifSent(true);
        }
    }

    performanceNotification();

    return (
        <div className="fill-container">
            <FadeIn>
                <Steps className="site-navigations-steps" size="small" type="navigation" current={currentStep}>
                    {s.map((step, num) => (<Step key={num} title={step.title} description={step.description} icon={step.icon}/>))}
                </Steps>
            </FadeIn>
            {s[currentStep].content()}
        </div>
    );
}   

export default Main;
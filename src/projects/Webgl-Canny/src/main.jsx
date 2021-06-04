import React, { useState } from 'react'
import { notification } from 'antd';
import { WarningTwoTone } from '@ant-design/icons';
import { Step1 } from './steps';
import "./main.scss";


const Main = () => {

    const [notifSent, setNotifSent] = useState(false);

    const performanceNotification = () => {
        if (notifSent === false) {
            notification.open({
                message: "This project works best on a powerful machine!",
                description: <span>This page uses WebGL - a dedicated GPU is STRONGLY recommended.<br />Loading images which are too large or updating parameters too quickly <i>may</i> cause the browser to run out of memory.</span>,
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
            {Step1()}
        </div>
    );
}   

export default Main;
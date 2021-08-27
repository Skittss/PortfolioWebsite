import React, { useState } from 'react'
import { notification } from 'antd';
import { WarningTwoTone } from '@ant-design/icons';
import { Steps } from './steps';
import "./main.scss";


const Main = () => {

    // Only send notif once per acces to this route - not using state would make this notif appear on every re-render.
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
            {Steps()}
        </div>
    );
}   

export default Main;
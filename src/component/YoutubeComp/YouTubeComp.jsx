import React from 'react';
import './YouTubeComp.css'
const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <p>{props.name}</p>
            <p>{props.time}</p>
            <p>{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    name: 'myname',
    time: '00.00',
    desc: 'my desc here'
}
export default YouTubeComp;